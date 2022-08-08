//**!      CONFIGURACION    */
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {body} = require("express-validator");

//**!      REQUIRE       */
const userController = require('../controllers/userController')

//**!     VALIDACIONES   */
const validationregister = [
    body('nombre').notEmpty().withMessage('Debes completar el Nombre'),
    body('apellido').notEmpty().withMessage('Debes completar el Apellido'),
    body('email').isEmail().withMessage('Debes completar el Mail'),
    body('contraseña').notEmpty().isLength({min: 8}).withMessage('Debes completar la Contraseña con mas de 8 letras'),
    body('imagenUsuario').notEmpty().withMessage('Debes Colocar una Imagen')
];
const validationlogin = [
    body('nombre').notEmpty().withMessage('Debes completar el Nombre'),
    body('email').isEmail().withMessage('Debes completar el Mail'),
    body('contraseña').notEmpty().isLength({min: 8}).withMessage('Debes completar la Contraseña con mas de 8 letras'),
];

//**!     MULTER        */
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "public/images/users");
    },
    filename:(req, file, cb)=>{
        const newFilename = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }
});

const upload = multer({storage:storage});

//**!      CONTROLLERS    */

/* ---- LOGIN ---- */
router.get('/login',userController.login);
router.post('/login',validationlogin ,userController.processLogin);

/* ---- REGISTER ---- */
router.get('/register',userController.register);
router.post('/register', upload.single('imagenUsuario'), validationregister ,userController.processRegister);

module.exports = router;
