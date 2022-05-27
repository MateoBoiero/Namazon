const fs = require('fs');
const path = require('path');

const productsController = {
    detalleDeProducto: (req, res)=>{
        return res.render('detalleDeProducto');
    },
    carritoCompras: (req,res)=>{
        return res.render('carritoCompras')
    },
    crearProductos: (req, res)=>{
        res.render('crearProductos')
    }
    //Agregar add, edit, destroy, create
}

module.exports = productsController;
