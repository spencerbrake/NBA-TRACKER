const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 100, default: 60}
}, {
    timestamps: true
});

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teams: {
        type: String,
        required: true
    },
    ringsWon: Number,
    activePlayer: {type: Boolean, default: false},
    comments: [commentSchema] 
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);