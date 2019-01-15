const express = require('express');
const router = express.Router();

// Importinging new book page controller
const newBook = require('../controllers/newBookPage');

// Render base layout for the new book page
router.use('/books/new', newBook.getNewBookPage);

module.exports = router;
