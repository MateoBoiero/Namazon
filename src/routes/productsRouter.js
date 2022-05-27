//**!      CONFIGURACION    */

const express = require("express");
const router = express.Router();

//**!        REQUIRE         */
const productsController = require("../controllers/productsController");

//**!        CONTROLLERS         */
/* carrito de compras */
router.get('/carritoCompras', productsController.carritoCompras)
router.get('/crearProductos', productsController.crearProductos)


/* Listado de productos */
router.get('/detalleDeProducto', productsController.detalleDeProducto)

/* 
Formulario de creación de productos
router.get('detalleDeProducto/create', productsController.create)
Detalle de un producto particular
router.get('detalleDeProducto/:id', productsController.id)
Acción de creación (a donde se envía el formulario)
router.post('/detalleDeProducto', productsController.detalleDeProducto)
Formulario de edición de productos
router.get('/detalleDeProducto/:id/edit', productsController.edit)
Acción de edición (a donde se envía el formulario)
router.put('/detalleDeProducto/:id', productsController.idsend)
Acción de borrado
router.delete('/detalleDeProducto', productsController.delete) 
*/

module.exports = router;