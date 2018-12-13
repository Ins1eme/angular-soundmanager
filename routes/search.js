const express = require('express');
const passport = require('passport');
const controller = require('../controllers/search');
const router = express.Router();
const Album = require('../models/Album')

router.get('/search/songs', controller.getSearchSong);

module.exports = router;
