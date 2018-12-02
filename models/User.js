const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = require('./Song');

const itemSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favourites: [{
        type: Schema.Types.ObjectId,
        ref: 'Song',
        unique: true
    }]
})

module.exports = mongoose.model('User', itemSchema);