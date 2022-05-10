const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController.js")

router.get('/', mainController.index);
router.get('/detalleDeProducto', mainController.detalleDeProducto);
router.get('/forgot', mainController.forgot);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
module.exports = router;