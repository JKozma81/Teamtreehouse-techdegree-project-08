const express = require('express');
const router = express.Router();

// Importinging home page controller
const detailsPage = require('../middlewares/detailsPage');

// Render base layout for the home page
router.use('/books/:bookId', detailsPage.getDateilsPage);

module.exports = router;
