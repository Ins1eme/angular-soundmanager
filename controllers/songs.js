const Song = require('../models/Song');
const Album = require('../models/Album');
const mongoose = require('mongoose');
const Author = require('../models/Author');

module.exports.getAlboms = async function (req, res) {
    const author = await Author.find().populate({
        path: 'albums',
        populate: {
            path: 'playlists'
        }
    })
    res.status(200).json(author)
}




module.exports.addAlbom = async function (req, res) {
    
    const song1 = new Song({
        songName: 'Broken Smile',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1veowYto8f-PxYomIOsz1230QzO-V7kRS',
    })

    const song2 = new Song({
        songName: 'Runaway',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1Nk1sKCLOGraj-WlIJtFR12YigiPYkDdV',
    })

    const song3 = new Song({
        songName: 'Sex With My Ex',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1WWun6-HWRCVQ44H4PYxOySVeG1zAtcw2',
    })

    const song4 = new Song({
        songName: 'Cry Alone',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1VRkAgZxgA_5znmmxCrrmsqk6UA6MkmRA',
    })

    const song5 = new Song({
        songName: 'Leanin`',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1-YACdqwqDeOB0-02Xr24Kk_84khohAiU',
    })

    const song6 = new Song({
        songName: '16 Lines',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1G4P51DFK0ByrgLfEjq0VFd7_Hnjm8E9b',
    })

    const song7 = new Song({
        songName: 'Life is Beautiful',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1aYfpfULb_Hih4fs7hT9_KIyrpm_WM-ZQ',
    })

    const song8 = new Song({
        songName: 'Hate Me',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1JaWCZG9DFHbePE2XYhvEKMKfcjDKj_hL',
    })

    const song9 = new Song({
        songName: 'Fingers',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1mjDSxh3536gmq6mzoAJQcP2A80gJw1GA',
    })

    const song10 = new Song({
        songName: 'IDGAF',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=1-t134s47wnjjJ0dSse3PqG9XHAjUExxS',
    })

    const song11 = new Song({
        songName: 'White Girl',
        songAuthor: 'Lil Peep',
        url: 'https://drive.google.com/uc?export=download&id=12pKTixSgnc5NPZF7MZRxztluozHwyVNS',
    })

    const album = new Album({
        albumName: 'Come Over When You`re Sober, Pt. 2',
        albumAuthor: 'Lil Peep',
        backgroundImage: 'https://drive.google.com/uc?export=download&id=1x0tPkxuuPgrZU3U5RcSUAQsFtkf1TAkh',
        genre: ['Rap', 'Hip-hop'],
        playlists: [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11]
    })

    const author = new Author({
        authorName: 'Lil Peep',
        albums: [album],
        genre: ['Rap', 'Hip-hop']
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
}

