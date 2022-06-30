const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Peliculas = db.Pelicula;
const Categorias = db.Categoria;
const Genero = db.Genero;
const Usuarios = db.Usuario;

const productsController = {    
    list: (req, res) => {
        db.Pelicula.findAll()
            .then(peliculas => {
                res.render('list.ejs', {peliculas})
            })
    },
    detail: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
            .then(peliculas => {
                res.render('detail.ejs', {peliculas});
            });
    },

    /* CRUD */
    add: function (req, res) {
        db.Genero.findAll()
        .then(generos=>{
            res.render('add.ejs', {allGeneros:generos})
        })
        res.render('/add')  
    },
    create: function (req, res) {
        db.Pelicula.create({
            id:req.body.id,
            nombre:req.body.nombre,
            rating:req.body.rating,
            precio:req.body.precio,
            descripcion:req.descripcion,
            imagen:req.body.imagen,
            idGenero:req.body.idGenero
        })
        .then(peliculas=>{
            res.redirect('/index') /* NO ESTOY SEGURO DE ESTO */
        })
    },
    edit: function(req, res) {
        db.Pelicula.findByPk(req.params.id,{
            include:[Genero]
        })
        .then(peliculas=>{
            db.Genero.findAll()
            .then(generos=>{
                res.render('edit.ejs',{peliculas, allGeneros:generos})
            })
        })
    },
    update: function (req,res) {
        db.Pelicula.update({
            id:req.body.id,
            nombre:req.body.nombre,
            rating:req.body.rating,
            precio:req.body.precio,
            descripcion:req.descripcion,
            imagen:req.body.imagen,
            idGenero:req.body.idGenero
        },{
            where:{
                id:req.params.id
            }
        })
        .then(peliculas=>{
            res.render('/index')
        })
    },
    delete: function (req, res) {
        db.Pelicula.findByPk(req.params.id)
        .then(peliculas=>{
            res.render('/movieDeletes',{peliculas})
        })
    },
    destroy: function (req, res) {
        db.Pelicula.destroy({
            where:
            {id:req.params.id}
        })
        .then(()=>{
            res.render('/index')
        })
    }
}

module.exports = productsController;
