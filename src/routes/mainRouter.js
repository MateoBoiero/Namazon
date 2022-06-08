//**!      CONFIGURACION    */
const express = require("express");
const router = express.Router();
const path = require('path');

//**!      REQUIRE          */
const mainController = require("../controllers/mainController.js");
const productsController = require("../controllers/productsController.js");
const productsRouter = require("../routes/productsRouter.js")
//**!      CONTROLLERS       */
router.get('/', mainController.index);
router.get('/products', productsRouter)
module.exports = router;