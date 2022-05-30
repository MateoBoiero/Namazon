//**!      CONFIGURACION    */
const express = require("express");
const router = express.Router();
const multer = require("multer")
const path = require("path")

//**!      REQUIRE       */
const userController = require('../controllers/userController')

//**!     MULTER        */
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, path.join(__dirname,"../public/images/groups"));
    },
    filename:(req, file, cb)=>{
        const newFilename = 'groups-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename)
    }
});

const upload = multer({storage:storage});

//**!      CONTROLLERS    */
router.get('/login',userController.login);

router.get('/register',userController.register);
router.post('/register', upload.single('groups-images'), userController.processRegister);

router.get('/forgot',userController.forgot);

module.exports = router;
