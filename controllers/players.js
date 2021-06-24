const Player = require('../models/player');

module.exports = {
    index,
    create,
    new: newPlayer,
    show,
    delete: deletePlayer,
    edit,
    update
};


function index(req, res) {
    Player.find({user: req.user}, function(err, players){
        res.render('players/index', { players:players });
    });
}

function newPlayer(req, res) {
    req.body.user = req.user
    res.render('players/new')
}

function create(req, res) {
    req.body.activePlayer = !!req.body.activePlayer
    req.body.user = req.user
    const player = new Player(req.body);
    player.save(function(err) {
        if (err) return res.redirect('/players');
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

function edit(req, res) {
    Player.findById(req.params.id, function(err, players){
        if (err) {
            res.send(err);
        } else {
            res.render('players/edit', { players: players});
        }
    });
}

function update(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body, {new: true},
        function(err, players){
        });
        res.redirect(`/players/${req.params.id}`);
}