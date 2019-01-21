const express = require('express');
const passport = require('passport');
const controller = require('../controllers/search');
const router = express.Router();

router.get('/search/songs', passport.authenticate('jwt', { session: false }), controller.getSearchSong);

module.exports = router;
