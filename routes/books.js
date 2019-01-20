const express = require('express');

const router = express.Router();

const homepage = require('../middlewares/homePage');

router.get('/books', homepage.getHomePageLayout, homepage.getHomePageContent);

module.exports = router;
