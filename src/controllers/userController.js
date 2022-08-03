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
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Usuario.findAll()
            .then(usuarios=>{

                let usuarioALogearse;
                for(let i = 0; i < usuarios.lenght; i++){
                    if(usuarios[i].email == req.body.email && usuarios[i].nombre == req.body.nombre){
                        if(bcrypt.compareSync(req.body.contraseña,usuarios[i].contraseña))
                        {
                            usuarioALogearse = usuarios[i];
                        }
                    }
                }
                if(usuarioALogearse == undefined){
                    return res.render('login', {errors: [
                    {msg: 'Error al Logear'}
                ]})
                }
                req.session.usuarioLogeado = usuarioALogearse
                res.send('Buena Mateo!!')

                if(req.body.checkbox != undefined){
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