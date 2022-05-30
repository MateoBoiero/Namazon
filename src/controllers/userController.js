const fs = require('fs');
const path = require('path');

const userController= {
    login: (req,res)=>{
        return res.render('login')
    },
    register: (req,res)=>{
        return res.render('register')
    },
    /* req.body viene del file en el router */
    processRegister:(req,res)=>{
        console.log(req.file)
        let registerBody = req.body;
        let registerID = create(registerBody);
        res.redirect('register/'+registerID)
    },
    forgot: (req,res)=>{
        return res.render('forgot')
    },
}
module.exports = userController;