const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');
const { loginRequired } = require('./src/middlewares/globalMiddleware')


router.get('/', contactController.readAll);

// Login & Registro
router.get('/login/', loginController.index);
router.post('/login/sing-up', loginController.singUp);
router.post('/login/sing-in', loginController.singIn);
router.get('/login/logout', loginController.logout);

// Contatos
router.get('/contact', loginRequired, contactController.index);
router.post('/contact/create', loginRequired, contactController.create);
router.get('/contact/:id', loginRequired, contactController.edit);
router.post('/contact/update/:id', loginRequired, contactController.update);
router.get('/delete/:id', loginRequired, contactController.delete)

module.exports = router;