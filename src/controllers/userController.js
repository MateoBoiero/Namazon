const fs = require('fs');
const path = require('path');

const userController= {
    login: (req,res)=>{
        res.sendFile(path.resolve(__dirname, "./views/login.ejs"))
    },
    register: (req,res)=>{
        res.sendFile(path.resolve(__dirname, "./views/register.ejs"))
    },
    forgot: (req,res)=>{
        res.sendFile(path.resolve(__dirname, "./views/forgot.ejs"))
    },
}