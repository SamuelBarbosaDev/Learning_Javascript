const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');


router.get('/', homeController.index);

// Login & Registro
router.get('/login', loginController.index);


module.exports = router;