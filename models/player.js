const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

const playerSchema = new Schema({
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