const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');
const formController = require('./controllers/formController');

router.get('/', homeController.home);
router.get('/contact', contactController.meContact);
router.get('/form', formController.suNombre);
router.post('/form', formController.formResponse);

module.exports = router;