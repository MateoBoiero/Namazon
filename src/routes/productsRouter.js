//**!      CONFIGURACION    */

const express = require("express");
const router = express.Router();

//**!        REQUIRE         */
const productsController = require("../controllers/productsController");

//**!        CONTROLLERS         */
/* router.get('/:num', productsController.detalleDeProducto); */
router.get('/detalleDeProducto', productsController.detalleDeProducto)
router.get('/carritoCompras', productsController.carritoCompras)

module.exports = router;