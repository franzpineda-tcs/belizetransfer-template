const express = require('express'),
router = express.Router(),
pages = require('../controllers/pages/pagesController')

// normal page routes
router.get('/',pages.get.home)
router.get('/page/:page_name',pages.get.staticPages)

//export router

module.exports = router
