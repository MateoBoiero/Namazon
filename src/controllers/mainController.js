const fs = require('fs');
const path = require('path');

const mainController = {
    index: (req, res)=>{
        /* res.sendFile(path.resolve(__dirname, "../views/index.ejs")) */
        return res.render('index')
    }
};

module.exports = mainController;