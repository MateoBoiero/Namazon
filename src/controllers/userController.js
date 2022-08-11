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
    processLogin: (req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
        db.Usuario.findOne({
                where: { email: req.body.email, 
                        nombre:req.body.nombre}
            })
            .then((usuarioALogearse) => {
                if (usuarioALogearse) {
                    const contraseñaValida = bcrypt.compareSync(req.body.contraseña, usuarioALogearse.contraseña);
                    if (contraseñaValida) {
                        req.session.usuarioLogeado = usuarioALogearse;
                        if (req.body.checkbox) {
                            res.cookie({ where: { email: req.body.email } }, { maxAge: 1000 * 60 * 2 })
                        }
                        return res.redirect('/');
                    }
                    
                    return res.render('login', {
                        OldData: req.body,
                        errors: {
                            password: {
                                msg: 'Contraseña Incorrecta'
                            }
                        }
                    });
                }
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'Verificar Email'
                        }
                    }
                })
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