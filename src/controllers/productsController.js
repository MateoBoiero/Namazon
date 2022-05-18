const fs = require('fs');
const path = require('path');

const productsController = {
    detalleDeProducto: (req, res)=>{
        return res.render('detalleDeProducto');
    },
    carritoCompras: (req,res)=>{
        return res.render('carritoCompras')
    },
    //Agregar add, edit, destroy, create
}

module.exports = productsController;
