const express = require('express');
const controller = require('../controllers/songs');
const router = express.Router();
const Album = require('../models/Album')


router.get('/music/albums', controller.getAlboms);

router.post('/music/albums', controller.addAlbom);


module.exports = router;
