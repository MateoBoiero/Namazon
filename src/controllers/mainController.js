const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname, "/../data/productsDataBase.json") ;
const productsJSON = JSON.parse(fs.readFileSync(datapath, {encoding: 'utf-8'}))
const mainController = {
    index: (req, res)=>{
        res.render('index',{products:productsJSON});

    }
};

module.exports = mainController;