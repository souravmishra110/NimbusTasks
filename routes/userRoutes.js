// const express = require('express');
// const router = express.Router();



module.exports = function (settings){
    let { app } = settings;
    
    app.get('/users/listUser', (req, res) => {
        res.send("debug /user/listUser");
    });
    
    app.post('/users/addUser', (req, res) => {
        res.send("debug /user/addUser");
    });

};