const Player = require('../models/player');
console.log(Player)

module.exports = {
    index,
    create,
    new: newPlayer

};


function index(req, res) {
    Player.find({user: req.user}, function(err, players){
        console.log(err, players)
        res.render('players/index', { players:players });
    });
}

function newPlayer(req, res) {
    res.render('players/new')
}

function create(req, res) {
    console.log(req.body, req.user)
    const player = new Player(req.body);
    player.save(function(err) {
        if (err) return res.redirect('/players');
        console.log(err);
        res.render(`/players`);
    });
}
