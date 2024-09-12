const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');

router.get('/top-headlines', controller.getTopHeadlines);
router.get('/search', controller.searchNews);

module.exports = router;
