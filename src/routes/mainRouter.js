const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController")

router.get('/', mainController.detalleDeProducto);
router.get('/', mainController.forgot);
router.get('/', mainController.index);
router.get('/', mainController.login);
router.get('/', mainController.register);

module.exports = router;