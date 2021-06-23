const Player = require('../models/player');

module.exports = {
    create
};

function create(req, res) {
    Player.findById(req.paramas.id, function(err, player){
        req.body.userId = req.user._id;
        req.body.username = req.user.name;
        player.comments.push(req.body);
        player.save(function(err){
            res.redirect(`/movies/${player._id}`);
        });
    });
}