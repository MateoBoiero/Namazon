const fs = require('fs')

function textmiddleware(req, res,next){
    fs.appendFileSync('log.txt', 'Se Ingreso En  ' + req.url);
    
    next();
}

module.exports = textmiddleware;