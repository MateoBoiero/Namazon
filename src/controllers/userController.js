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
    processLogin:(req, res)=>{
        let errors = validationResult(req); /* Validaciones */
        if(errors.isEmpty()){   /* Si no Tiene Errores */
            db.Usuario.findAll() /* Busca en la base de datos a los usuarios */
            .then(usuarios=>{
                let usuarioALogearse; 
                for(let i = 0; i < usuarios.length; i++){  /* Recorro todos los Usuarios */
                /* res.send(usuarios[i]) */
                    if(usuarios[i].email == req.body.email 
                    && usuarios[i].nombre == req.body.nombre
                    && bcrypt.compareSync(req.body.contraseña,usuarios[i].contraseña))
                    {usuarioALogearse = usuarios[i];}
                    else{res.send("Error 1")}
                }
                if(usuarioALogearse == undefined){ /* Si lo anterior es correcto y Usuario es indefinido */
                    return res.render('login', {errors: [
                    {msg: 'Error al Logear'}  /*Devolver Errores */
                ]})
                }
                else{res.send("Error 2")}
                req.session.usuarioLogeado = usuarioALogearse /* Aqui Cambia nombre de La Variable */
                if(req.body.checkbox != undefined){ /* Checkbox */
                    res.cookie('checkbox', usuarioALogearse.email, usuarioALogearse.contraseña,{maxAge: 60000})
                }
            })
        }
        else{
            return res.render('login', {errors:errors.errors})
        }
    },
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
                res.redirect('login')
            })
        }
        else{
            return res.render('register', {errors:errors.errors})
        }
    }
}

module.exports = userController;