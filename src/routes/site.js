const express = require('express');
const siteController = require('../app/Controllers/SiteController');
const router = express.Router();

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
