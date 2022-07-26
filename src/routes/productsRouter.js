//**!      CONFIGURACION    */

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//**!        REQUIRE         */
const productsController = require("../controllers/productsController");

//**!        CONTROLLERS         */

/* carrito de compras */
router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.add);
router.post('/create', productsController.create);

router.get('/edit/:id', productsController.edit);
router.post('/update/:id', productsController.update);

router.get('/delete/:id', productsController.delete);
router.post('/delete/:id', productsController.destroy);

module.exports = router;