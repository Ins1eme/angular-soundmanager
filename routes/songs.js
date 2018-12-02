const express = require('express');
const passport = require('passport');
const controller = require('../controllers/songs');
const router = express.Router();
const Album = require('../models/Album')


router.get('/music/albums', passport.authenticate('jwt', { session: false }), controller.getAlboms);

router.get('/music/authors', passport.authenticate('jwt', {session: false}), controller.getAuthors);
router.get('/music/author', passport.authenticate('jwt', {session: false}), controller.getAuthor);
router.get('/music/playlist', passport.authenticate('jwt', {session: false}), controller.getPlaylistByAuthorName);

router.post('/music/albums', passport.authenticate('jwt', {session: false}), controller.addAlbom);

router.get('/user/playlist', passport.authenticate('jwt', { session: false }), controller.getUserPlaylist);
router.put('/user/playlist', passport.authenticate('jwt', { session: false }), controller.addToUserPlaylist);
router.delete('/user/playlist/:id', passport.authenticate('jwt', { session: false }), controller.deleteFromUserPlaylist);


module.exports = router;
