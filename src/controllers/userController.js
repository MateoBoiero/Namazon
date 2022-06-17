const express = require('express');
const {validationResult} = require('express-validator');
const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname,'../data/users.json')
const users = JSON.parse(fs.readFileSync(datapath, {encoding: 'utf-8'}));

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
        let usuario = {
    
            id: users[users.length-1].id+1,
            usuario: req.body.usuario,
            password: req.body.password,
            email:req.body.email,
            groupsImages: req.file ? req.file.filename : "default.png"
        
        }
        users.push(usuario)
        fs.writeFileSync(datapath, JSON.stringify(users, null, " "))
        res.redirect('/')
    },
    forgot: (req,res)=>{
        return res.render('forgot')
    },
}

module.exports = userController;