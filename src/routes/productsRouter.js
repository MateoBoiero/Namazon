//**!      CONFIGURACION    */

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//**!        REQUIRE         */
const productsController = require("../controllers/productsController");

//**!        CONTROLLERS         */
/* carrito de compras */
router.get('/carritoCompras', productsController.carritoCompras)

router.get('/create', productsController.create);
router.post('/', productsController.tienda)


/* Listado de productos */
router.get('/detalleDeProducto', productsController.detalleDeProducto)

module.exports = router;