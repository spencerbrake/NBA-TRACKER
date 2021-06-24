const Player = require('../models/player');

module.exports = {
    create
};

function create(req, res) {
    console.log(req.params.id);
    Player.findById(req.params.id, function(err, player){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        console.log(req.body.user, 'req.body.user');
        console.log(req.body.userName, 'req.body.userName');
        console.log(player.comments, 'player.comments before');
        player.comments.push(req.body);
        console.log(player.comments, 'player.comments after');
        player.save(function(err){
            res.redirect(`/players/${player._id}`);
        });
    });
}