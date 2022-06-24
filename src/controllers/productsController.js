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
    detalleDeProducto: (req, res)=>{
        let productoId = req.params.num;
        res.send('Detalle del producto ' + productoId);
    },
    carritoCompras: (req,res)=>{
        return res.render('carritoCompras')
    },
    create: (req, res)=>{
        Peliculas
        .create(
            {
                nombre: req.body.nombre,
                imagen: req.body.imagen,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                rating: req.body.rating,
                idGenero: req.body.idGenero,
                idActor: req.body.idActor
            }
        )
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error))
       
       
        /* res.render('products-create') */
    },
    tienda: (req, res)=>{
        res.send(req.body)
    },
    edit: (req, res) =>{
        res.render('products-edit')
    }
}

module.exports = productsController;
