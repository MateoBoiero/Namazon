const {validationResult} = require('express-validator');
const req = require('express/lib/request');
const fs = require('fs');
let bcrypt = require('bcrypt');
/* const datapath = path.join(__dirname,'../data/users.json') */
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const userController= {
    login: (req,res)=>{
        return res.render('login')
    },
/* PROCESSLOGIN */
    register: (req,res)=>{
        return res.render('register')
    },
    /* req.body viene del file en el router */
    processRegister:(req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            
            db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                contraseña: bcrypt.hashSync(req.body.contraseña, 10),
                email:req.body.email,
                imagenUsuario: req.file ? req.file.filename : "default.png",
                idCategoria: 2
            }).then(usuario=>{
                res.redirect('/')
            })
        }
        else{
            return res.render('register', {errors:errors.errors})
        }
    },
    forgot: (req,res)=>{
        return res.render('forgot')
    },
}

module.exports = userController;