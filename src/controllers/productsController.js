const fs = require('fs');
const path = require('path');

const productsController = {
    detalleDeProducto: (req, res)=>{
        let productoId = req.params.num;
        res.render("Detalle del producto " + productoId);
    },
    carritoCompras: (req, res)=>{
        return res.render('carritoCompras')
    },
    //Agregar add, edit, destroy, create
}

module.exports = productsController;