const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');
const { loginRequired } = require('./src/middlewares/globalMiddleware')


router.get('/', homeController.index);

// Login & Registro
router.get('/login/', loginController.index);
router.post('/login/sing-up', loginController.singUp);
router.post('/login/sing-in', loginController.singIn);
router.get('/login/logout', loginController.logout);

// Contatos
router.get('/contact', loginRequired, contactController.index);
router.post('/contact/create', loginRequired, contactController.create);
router.get('/contact/:id', loginRequired, contactController.update);

module.exports = router;