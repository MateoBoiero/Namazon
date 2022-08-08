const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;


/* const Peliculas = db.Pelicula;
const Categorias = db.Categoria;
const Genero = db.Genero;
const Usuarios = db.Usuario; */

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
        /* res.render('/add')   */
    },
    create: function (req, res) {
        db.Pelicula.create({
            nombre:req.body.title,
            rating:req.body.rating,
            precio:req.body.precio,
            descripcion:req.body.descripcion,
            imagen:'imagen-no-disponible01601774755.jpg',
            idGenero:req.body.idGenero
        })
        .then(peliculas=>{
            res.redirect('/') 
        })
    },
    edit: function(req, res) {
        db.Pelicula.findByPk(req.params.id,{
            include:['generos']
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
            res.render('delete',{peliculas})
        })
    },
    destroy: function (req, res) {
        db.Pelicula.destroy({
            where:
            {id:req.params.id}
        })
        .then(()=>{
            res.render('index')
        })
    }
}

module.exports = productsController;
