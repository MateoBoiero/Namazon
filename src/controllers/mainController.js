const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname, "/../data/productsDataBase.json") ;
const productsJSON = JSON.parse(fs.readFileSync(datapath, {encoding: 'utf-8'}))
const db = require('../database/models');
const sequelize = db.sequelize;

const Pelicula = db.Pelicula

const mainController = {
    index: (req, res)=>{
        db.Pelicula.findAll()
        .then(pelicula=>{
            res.render('list.ejs',{pelicula:pelicula})
        })
        .catch(error=>{
            res.send(error)
        })
    }
    /* index: (req, res)=>{
        res.render('list');
    } */
};

module.exports = mainController;