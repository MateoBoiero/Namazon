//**!      CONFIGURACION    */
const express = require("express");
const router = express.Router();
const path = require('path');

//**!      REQUIRE          */
const mainController = require("../controllers/mainController.js");
//**!      CONTROLLERS       */
router.get('/', mainController.index);
router.get('/list', mainController.list)

module.exports = router;