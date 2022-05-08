const express = require('express');
const app = express();

const path = require('path');
const mainRouter = require("./routes/mainRouter");
app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static("public"));

/*app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/detalleDeProducto", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/detalleDeProducto.html"))
});

//Mateo
app.get ("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get ("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});


app.get ("/forgot", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/forgot.html"))
});
<<<<<<< HEAD:app.js
app.get ("/carritoCompras", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/carritoCompras.html"))
});
=======

 
app.get ("/log", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});*/

app.listen(4000, () =>{
    console.log('servidor corriendo en http://localhost:4000');
});

>>>>>>> 7543dcba25013ea4ea3d2a46a515b6ad907d3297:src/app.js
