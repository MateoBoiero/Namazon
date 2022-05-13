const fs = require('fs');
const path = require('path');

const userController= {
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    forgot: (req,res)=>{
        res.render('forgot')
    },
}
module.exports = userController;