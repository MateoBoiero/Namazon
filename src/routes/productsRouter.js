//**!      CONFIGURACION    */

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//**!        REQUIRE         */
const productsController = require("../controllers/productsController");

//**!        CONTROLLERS         */
/* carrito de compras */
router.get('/peliculas/new', moviesController.new);
router.get('/peliculas/recommended', productsController.recomended);
router.get('/peliculas/detail/:id', productsController.detail);


//Rutas exigidas para la creación del CRUD
router.get('/peliculas/add', productsController.add);
router.post('/peliculas/create', productsController.create);

router.get('/peliculas/edit/:id', productsController.edit);
router.post('/peliculas/update/:id', productsController.update);

router.get('/peliculas/delete/:id', productsController.delete);
router.post('/peliculas/delete/:id', productsController.destroy);

module.exports = router;