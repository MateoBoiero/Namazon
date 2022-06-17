const fs = require('fs');
const path = require('path');

const productsController = {
    detalleDeProducto: (req, res)=>{
        let productoId = req.params.num;
        res.send('Detalle del producto ' + productoId);
    },
    carritoCompras: (req,res)=>{
        return res.render('carritoCompras')
    },
    create: (req, res)=>{
        res.render('products-create')
    },
    tienda: (req, res)=>{
        res.send(req.body)
    },
    edit: (req, res) =>{
        res.render('products-edit')
    }
}

module.exports = productsController;
