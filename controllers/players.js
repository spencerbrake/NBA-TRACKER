const Player = require('../models/player');
console.log(Player)

module.exports = {
    index,
    create,
    new: newPlayer,
    show

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
    req.body.activePlayer = !!req.body.activePlayer;
    const player = new Player(req.body);
    player.save({user: req.user}, function(err) {
        console.log(player)
        if (err) return res.redirect('/players/new');
        console.log(err);
        res.redirect(`/players`);
    });
}

function show(req, res){

}
