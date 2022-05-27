//**!      CONFIGURACION    */

const express = require("express");
const router = express.Router();

//**!        REQUIRE         */
const productsController = require("../controllers/productsController");

//**!        CONTROLLERS         */
router.get('/carritoCompras', productsController.carritoCompras)
router.get('/crearProductos', productsController.crearProductos)
/*SIEMPRE VA ULTIMA ESTA*/
router.get('/:num', productsController.detalleDeProducto);
module.exports = router;