const Song = require('../models/Song');
const Album = require('../models/Album');
const Author = require('../models/Author');
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
module.exports.addAlbom = async function (req, res) {
    
    const song1 = new Song({
        songName: "All These Things That I've Done",
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1BAIQ0RomDq4t_mDJTc8YZDkqY7m-AInw',
    })

    const song2 = new Song({
        songName: "Andy, You're a Star",
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1zhBpuSvt8Mb2EPbLYUtvnHmjHPOPCvwJ',
    })

    const song3 = new Song({
        songName: 'Believe Me Natalie',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1N3x3h8WxxD1-X71uh6REEdoRlMKZPuzi',
    })

    const song4 = new Song({
        songName: 'Change Your Mind',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1meSWVh3fDXAWNxcdhMw0x6eWkXJ7sMLv',
    })

    const song5 = new Song({
        songName: 'Everything Will Be Alright',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1GRO5QwomYibSTTZ5bbpCx6fK1ZMcVW4l',
    })

    const song6 = new Song({
        songName: 'Glamorous Indie Rock & Roll',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1P-xkuhyySWh2rd6Y6crExOfB3jxK336_',
    })

    const song7 = new Song({
        songName: 'Jenny Was a Friend of Mine',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=16ZDhjHnG1Vfw3sgJ2G7Aa0trsVeEEycq',
    })

    const song8 = new Song({
        songName: 'Midnight Show',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1aP5TUc09MvEm0tsAW4Cpqxt1PVqH9plA',
    })

    const song9 = new Song({
        songName: 'Mr. Brightside',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1OV1ej5gkHZKyvpnJdPvLS2GZKBZZaB50',
    })

    const song10 = new Song({
        songName: 'On Top',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=16zx171vTI-oGh1Pc5rZfULgMxlqMxcLf',
    })

    const song11 = new Song({
        songName: 'Smile Like You Mean It',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1s3wmg1gdBzqqWfwMh9C_pfWNi-dU5izk',
    })
    const song12 = new Song({
        songName: 'Somebody Told Me',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1rPzgGgN4USMSm5lWm4YaDhcO_DkrBJKN',
    })
    const song13 = new Song({
        songName: 'Smile Like You Mean It',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1s3wmg1gdBzqqWfwMh9C_pfWNi-dU5izk',
    })
    const song14 = new Song({
        songName: 'The Ballad of Michael Valentine',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1S_1uO_dMcCagUTQHrkOlpyr1ZUjYBfyZ',
    })
    const song15 = new Song({
        songName: 'Under the Gun',
        songAuthor: 'The Killers',
        url: 'https://drive.google.com/uc?export=download&id=1qjWOv5Vbsz08pK3w8J-A546z8ZjAVElW',
    })

    const album = new Album({
        albumName: 'Hot Fuss',
        albumAuthor: 'The Killers',
        backgroundImage: 'assets/the_killers/hot_fuss.jpg',
        playlists: [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15]
    })

    const author = new Author({
        authorName: 'The Killers',
        albums: [album],
        genre: ['Alternative rock', 'Indie rock'],
        authorImage: 'assets/the_killers/the_killers.jpg'
    })

    await author.save()
    await album.save()
    await song1.save()
    await song2.save()
    await song3.save()
    await song4.save()
    await song5.save()
    await song6.save()
    await song7.save()
    await song8.save()
    await song9.save()
    await song10.save()
    await song11.save()
    await song12.save()
    await song13.save()
    await song14.save()
    await song15.save()
}

