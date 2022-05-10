const fs = require('fs');
const path = require('path');

const mainController = {
    detalleDeProducto: (req, res)=>{
        res.render('detalleDeProducto')
    },
    forgot: (req, res)=>{
        res.render('forgot')
    },
    index: (req, res)=>{
        res.render('index')
    },
    login: (req, res)=>{
        res.render('login')
    },
    register: (req, res)=>{
        res.render('register')
    },
    carrito: (req, res)=>{
        res.render('carrito')
    }
};

module.exports = mainController;