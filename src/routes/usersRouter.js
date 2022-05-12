const express = require("express");
const router = express.Router();
const path = require('path');
const userController = require('../controllers/loginController')

router.get('/login',userController.login);
router.get('/register',userController.register);
router.get('/forgot',userController.forgot);
