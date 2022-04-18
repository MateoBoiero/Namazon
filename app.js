const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(4000, () =>{
    console.log('servidor corriendo en http://localhost:4000');
});

app.get("/", (req, res)=>{
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

/* en el login el boto de olvide mi contraseña */
app.get ("/forgot", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/forgot.html"))
});

 /* en el forgot el boton iniciar sesion */
app.get ("/log", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

