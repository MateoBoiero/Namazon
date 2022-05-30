//**!      CONFIGURACION    */

const express = require("express");
const router = express.Router();

//**!        REQUIRE         */
const productsController = require("../controllers/productsController");

//**!        CONTROLLERS         */
/* carrito de compras */
router.get('/carritoCompras', productsController.carritoCompras)

router.get('/crearProductos', productsController.crearProductos)
router.post('/', productsController.tienda)


/* Listado de productos */
router.get('/detalleDeProducto', productsController.detalleDeProducto)

module.exports = router;