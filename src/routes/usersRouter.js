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
    body('nombre').notEmpty().withMessage('Debes completar este campo'),
    body('apellido').notEmpty().withMessage('Debes completar este campo'),
    body('email').isEmail().withMessage('Debes completar este campo'),
    body('contraseña').notEmpty().withMessage('Debes completar este campo'),
    body('imagenUsuario').notEmpty().withMessage('Debes completar este campo')
];

//**!     MULTER        */
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "public/images/groups");
    },
    filename:(req, file, cb)=>{
        const newFilename = 'groups-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename)
    }
});

const upload = multer({storage:storage});

//**!      CONTROLLERS    */
router.get('/login',userController.login);
router.post('/login',userController.login);

router.get('/register',userController.register);
router.post('/register', upload.single('groups-images'), validationregister ,userController.processRegister);

router.get('/forgot',userController.forgot);

module.exports = router;
