const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');
const formController = require('./src/controllers/formController');

router.get('/', homeController.home);
router.get('/contact', contactController.meContact);
router.get('/form', formController.suNombre);
router.post('/form', formController.formResponse);

module.exports = router;