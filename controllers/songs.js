const Author = require('../models/Author');
const Album = require('../models/Album');
const User = require('../models/User');

module.exports.getAlboms = async function (req, res) {
    const author = await Author.find().populate({
        path: 'albums',
        populate: {
            path: 'playlists'
        }
    })
    res.status(200).json(author)
}

module.exports.getAuthors = async function (req, res) {
    const authors = await Author.find()
    res.status(200).json(authors)
}

module.exports.getUserPlaylist = async function(req, res) {
    const user = await User.findById(req.user._id).populate({
        path: 'favourites'
    })
    res.status(200).json(user.favourites)
}

module.exports.addToUserPlaylist = async function(req, res) {

    const user= await User.findOneAndUpdate(
        {_id: req.user._id},
        {$push: 
            { favourites: 
                { $each: [req.body._id], $position: 0}
            }
        },
        {new: true}
    )

    res.status(200).json(user.favourites)
}

module.exports.getPlaylistByAuthorName = async function(req, res) {
    let playlist = []
    const author = await Author.findOne({ authorName: req.query.name }).populate({
        path: 'albums',
        populate: {
            path: 'playlists'
        }
    })
    author.albums.map((album) => {
        playlist = playlist.concat(album.playlists)
    })

    
    res.status(200).json(playlist)
}

module.exports.getAuthor = async function(req, res) {
    const author = await Author.findOne({authorName: req.query.name}).populate({
        path: 'albums',
        populate: {
            path: 'playlists'
        }
    })
    
    res.status(200).json(author)
}

module.exports.deleteFromUserPlaylist = async function(req, res) {
    const user = await User.findOneAndUpdate(
        { _id: req.user._id },
        { $pullAll: { favourites: [req.params.id] } },
        { new: true }
    ).populate({
        path: 'favourites'
    })

    res.status(200).json(user.favourites)
}


