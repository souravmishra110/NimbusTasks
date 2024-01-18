// const express = require('express');
// const router = express.Router();

const { addUser, listUser, login } = require("../controllers/userController");
const { validateAddUser, validateLogin } = require("../validators/userValidator");



module.exports = function (settings){
    let { app } = settings;
    
    app.get('/users/listUser', listUser);
    
    app.post('/users/signup', validateAddUser, addUser);

    app.post('/users/login', validateLogin, login);
};