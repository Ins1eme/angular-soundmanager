const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    songName: {
        type: String,
        required: true
    },
    songAuthor: {
        type: String,
        required: true
    },
    url: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('Song', itemSchema);