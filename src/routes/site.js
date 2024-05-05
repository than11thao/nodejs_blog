const express = require('express');
const siteController = require('../app/Controllers/SiteController');
const router = express.Router();

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
