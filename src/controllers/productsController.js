const fs = require('fs');
const path = require('path');

const productsController = {
    detalleDeProducto: (req, res)=>{
        res.render('detalleDeProducto')
    },
    carritoCompras: (req, res)=>{
        res.render('carritoCompras')
    },
    //Agregar add, edit, destroy, create
}

module.exports = productsController;
