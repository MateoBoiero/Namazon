const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname, "/../data/productsDataBase.json") ;
const productsJSON = JSON.parse(fs.readFileSync(datapath, {encoding: 'utf-8'}))
const db = require('../database/models')

const mainController = {
    index: (req, res)=>{
        db.Genero.findAll()
        .then(generos=>{
            res.send(generos)
        })
        .catch(error=>{
            res.send(error)
        })

        res.render('index',{products:productsJSON});

    }
};

module.exports = mainController;