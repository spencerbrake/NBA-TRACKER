const Player = require('../models/player');
console.log(Player)

module.exports = {
    index,
    create,
    new: newPlayer,
    show,
    delete: deletePlayer
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
    req.body.activePlayer = !!req.body.activePlayer
    req.body.user = req.user
    const player = new Player(req.body);
    player.save(function(err) {
        console.log(err)
        console.log(player, "<-- this is player")
        if (err) return res.redirect('/players');
        console.log(err);
        res.redirect(`/players/${player._id}`);
    });
}

function show(req, res){
    req.body.user = req.user
    Player.findById(req.params.id).exec(function(err, players){
        res.render('players/show', {
            players: players
        });
    });

}

function deletePlayer(req, res) {
    Player.deleteOne(
        {_id: req.params.id, user: req.user._id}, function(err) {
            res.redirect('/players')
        }
    );
}