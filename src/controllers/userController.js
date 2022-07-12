const {validationResult} = require('express-validator');
const req = require('express/lib/request');
const fs = require('fs');
let bcrypt = require('bcrypt');
/* const datapath = path.join(__dirname,'../data/users.json') */
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Generos = db.Genero;
const Usuarios = db.Usuario;

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
        if(errors.isEmpty()){
            
        db.Usuarios.create =({
    
            id: usuarios[usuarios.length-1].id+1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            constraseña: bcrypt.hashSync(req.body.constraseña, 10),
            email:req.body.email,
            imagenUsuario: req.file ? req.file.filename : "default.png"
        
        }).then(usuario=>{
            res.redirect('/')
        })
        fs.writeFileSync(datapath, JSON.stringify(users, null, " "))
    }
    },
    forgot: (req,res)=>{
        return res.render('forgot')
    },
}

module.exports = userController;