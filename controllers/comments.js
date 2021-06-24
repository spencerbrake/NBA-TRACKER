const Player = require('../models/player');

module.exports = {
    create
};

function create(req, res) {
    Player.findById(req.params.id, function(err, player){
        req.body.user = req.user.id;
        req.body.userName = req.user.name;
        player.comments.push(req.body);
        player.save(function(err){
            res.redirect(`/players/${player._id}`);
        });
    });
}