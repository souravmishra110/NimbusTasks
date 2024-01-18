const { addUser, listUser, getUserByEmail } = require("../models/userModel");
const responseWrapper = require('../utils/responseWrapper');
const errorCodes = require('../utils/exceptions.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.addUser = async (req, res) => {
    try{
        let newUser = await addUser(req.body);
        if(newUser){
            responseWrapper.sendOk(res, errorCodes['10200'], '10200', newUser);
        }
        else{
            responseWrapper.sendOk(res, errorCodes['10200'], '10200');
        }
    }
    catch(err){
        console.log(err);
        responseWrapper.badRequest(res, errorCodes['10400'], '10400');
    }
}

module.exports.listUser = async (req, res) => {
    try{
        let page = req.query.page || 0;
        let size = req.query.size || 10;
        let userList = await listUser(page, size);
        responseWrapper.sendOk(res, errorCodes['10200'], '10200', userList);
    }
    catch(err){
        console.log(err);
        responseWrapper.badRequest(res, errorCodes['10400'], '10400');
    }
}

module.exports.login = async (req, res)=> {
    try{
        const { email, password } = req.body;
        
        let checkUserExists = await getUserByEmail(email, 1); // active user
        if(!checkUserExists){
            responseWrapper.badRequest(res, errorCodes['10201'], '10201');
        }
        else{
            let isMatchPassword = await bcrypt.compare(password, checkUserExists['password']);
            if(isMatchPassword){
                let token = jwt.sign({
                    email: email,
                    username: checkUserExists['username']
                }, process.env.JWT_ACCESS_TOKEN, {'expiresIn': '8h'});
                let result = {
                    'token': token,
                    'email': email,
                    'username': checkUserExists['username']
                }
                responseWrapper.sendOk(res, errorCodes['10200'], '10200', result);
            }
            else{
                responseWrapper.badRequest(res, errorCodes['10202'], '10202');
            }
        }
    }
    catch(err){
        console.log(err);
        responseWrapper.badRequest(res, errorCodes['10400'], '10400');
    }
}