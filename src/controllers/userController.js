const express = require('express');
const {validationResult} = require('express-validator');
const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname,'../data/users')
const usersModel = JSON.parse(fs.readFileSync(datapath, {encoding: 'utf-8'}));

const userController= {
    login: (req,res)=>{
        return res.render('login')
    },
    register: (req,res)=>{
        return res.render('register')
    },
    /* req.body viene del file en el router */
    processRegister:(req,res)=>{
        let errors = validationResult(req);
        let users = req.body;
        userid = usersModel.create(users)
    },
    forgot: (req,res)=>{
        return res.render('forgot')
    },
}

module.exports = userController;