const Player = require('../models/player');
console.log(Player)

module.exports = {
    index,
    create,
    new: newPlayer

};


function index(req, res) {
    Player.find({}, function(err, players){
        console.log(err, players)
        res.render('players/index', { players:players });
    });
}

function newPlayer(req, res) {
    res.render('players/new')
}

function create(req, res) {
    
}
