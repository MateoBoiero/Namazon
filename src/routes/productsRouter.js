//**!      CONFIGURACION    */

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//**!        REQUIRE         */
const productsController = require("../controllers/productsController");

//**!        CONTROLLERS         */
<<<<<<< HEAD
/* carrito de compras */
router.get('/carritoCompras', productsController.carritoCompras)

router.get('/create', productsController.create);
router.post('/', productsController.tienda)


/* Listado de productos */
router.get('/detalleDeProducto', productsController.detalleDeProducto)

=======
router.get('/carritoCompras', productsController.carritoCompras)
router.get('/crearProductos', productsController.crearProductos)
/*SIEMPRE VA ULTIMA ESTA*/
router.get('/:num', productsController.detalleDeProducto);
>>>>>>> e152f0d4d62c36d9738962e530f6104e310e577d
module.exports = router;