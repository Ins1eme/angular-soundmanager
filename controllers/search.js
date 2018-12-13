const Song = require('../models/Song');

module.exports.getSearchSong = async function (req, res) {
    const searchSong = req.query.song
    const searchString = new RegExp(searchSong, 'gi');
    Song.aggregate().project({
        song: { $concat: ['$songAuthor', ' ', '$songName']},
        songName: 1,
        songAuthor: 1,
        url: 1
    })
    .match({ song: searchString})
    .exec(function(err, songs) {
        res.status(200).json(songs)
    })
    


}   