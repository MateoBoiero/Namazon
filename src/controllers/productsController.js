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
    },
    tienda: (req, res)=>{
        res.send(req.body)
    }
}

module.exports = productsController;
