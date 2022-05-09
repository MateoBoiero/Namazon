const express = require('express');
const app = express();

//configuracion
app.set('view engine', 'ejs');
app.use(express.static("public"));
const path = require('path');
app.use(express.urlencoded({ extended: false }));


const mainRouter = require("./routes/mainRouter");
app.set('views', path.resolve(__dirname, 'views')); 

app.get('/', (req, res) => {
    res.redirect('/')
});

app.use("/",mainRouter);

app.listen(4000, () => {
    console.log("Servidor Corriendo en http://localhost:4000")
});

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
app.get ("/carritoCompras", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/carritoCompras.html"))
});*/
