const express = require("express");
const router = express.Router();
const path = require('path');

const productsController = require("../controllers/productsController");

router.get('/detalleDeProducto', productsController.detalleDeProducto);
router.get('/carritoCompras', productsController.carritoCompras)

module.exports = router;