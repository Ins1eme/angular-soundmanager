const express = require('express');
const controller = require('../controllers/songs');
const router = express.Router();
const Album = require('../models/Album')


router.get('/music/albums', controller.getAlboms);

router.get('/music/authors', controller.getAuthors);
router.get('/music/author', controller.getAuthor);
router.get('/music/playlist', controller.getPlaylistByAuthorName);

router.post('/music/albums', controller.addAlbom);


module.exports = router;
