const express = require('express');
const router = express.Router();

// Importinging home page controller
const homePage = require('../controllers/homePage');

// Render base layout for the home page
router.use('/home', homePage.getHomePageContent, homePage.getHomePageLayout);

module.exports = router;
