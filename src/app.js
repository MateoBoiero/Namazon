//**!      CONFIGURACION    */
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views')); 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('method_'))

//**!        REQUIRE         */
const mainRouter = require('./routes/mainRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const productsRouter = require('./routes/productsRouter.js');
const { METHODS } = require('http');
const methodOverride = require('method-override');

//**!        ROUTER          */
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

//**!       LOCALHOST         */
app.listen(4004, () => {
    console.log("Servidor Corriendo en http://localhost:4004")
});

