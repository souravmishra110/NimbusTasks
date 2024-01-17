// const express = require('express');
// const router = express.Router();

const { addUser, listUser } = require("../controllers/userController");
const { validateAddUser } = require("../validators/userValidator");



module.exports = function (settings){
    let { app } = settings;
    
    app.get('/users/listUser', listUser);
    
    app.post('/users/addUser', validateAddUser, addUser);

};