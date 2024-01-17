const { addUser, listUser } = require("../models/userModel");

module.exports.addUser = async (req, res) => {
    try{
        let newUser = await addUser(req.body);
        if(newUser){
            res.send({'success': 'true', 'msg': 'user added successfully'})
        }
        else{
            return res.send({'success': 'false', 'msg': 'failed to add user'});
        }
    }
    catch(err){
        console.log(err);
        return res.send({'success': 'false', 'hint': JSON.stringify(err)});
    }
}

module.exports.listUser = async (req, res) => {
    try{
        let page = req.query.page || 0;
        let size = req.query.size || 10;
        let userList = await listUser(page, size);
        if(userList){
            res.send({'success': 'true', 'msg': 'user added successfully', 'data': userList})
        }
        else{
            return res.send({'success': 'false', 'msg': 'failed to add user'});
        }
    }
    catch(err){
        console.log(err);
        return res.send({'success': 'false', 'hint': JSON.stringify(err)});
    }
}