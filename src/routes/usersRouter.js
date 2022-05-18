//**!      CONFIGURACION    */
const express = require("express");
const router = express.Router();

//**!      REQUIRE       */
const userController = require('../controllers/userController')

//**!      CONTROLLERS    */
router.get('/login',userController.login);
router.get('/register',userController.register);
router.post('/register',userController.processRegister);
router.get('/forgot',userController.forgot);

module.exports = router;
