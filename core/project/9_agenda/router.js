const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');


router.get('/', homeController.index);

// Login & Registro
router.get('/login', loginController.index);
router.post('/login/sing-up', loginController.singUp);
router.post('/login/sing-in', loginController.singIn);
router.get('/login/logout', loginController.logout);

module.exports = router;