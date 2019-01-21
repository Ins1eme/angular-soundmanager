const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    authorName: {
        type: String,
        required: true
    },
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }],
    authorImage: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },

})

module.exports = mongoose.model('Author', itemSchema);