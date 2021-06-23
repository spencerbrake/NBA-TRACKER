const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: Number,
    content: String,
    rating: {type: Number, min: 1, max: 100, default: 60},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

const playerSchema = new Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    teams: {
        type: [String],
        required: true
    },
    rings: Number,
    activePlayer: {type: Boolean, default: false},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [commentSchema] 
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);