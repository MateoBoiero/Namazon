//**!      CONFIGURACION    */
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//**!        REQUIRE         */
const mainRouter = require("./routes/mainRouter");
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter')
app.set('views', path.resolve(__dirname, 'views')); 

//**!        ROUTER          */
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

//**!       LOCALHOST         */
app.listen(4000, () => {
    console.log("Servidor Corriendo en http://localhost:4000")
});

/*app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/detalleDeProducto", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/detalleDeProducto.html"))
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
