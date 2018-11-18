const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    albumName: {
        type: String,
        required: true,
    },
    albumAuthor: {
        type: String,
        required: true
    },
    backgroundImage: {
        type: String,
        required: true
    },
    playlists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }],

})

module.exports = mongoose.model('Album', itemSchema);