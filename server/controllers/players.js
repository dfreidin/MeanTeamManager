const mongoose = require("mongoose");
const Player = mongoose.model("Player");
function buildQueryHandler(res) {
    return function(err, data) {
        if(err) {
            res.json({
                message: "Error",
                error: err
            });
        }
        else {
            res.json({
                message: "Success",
                data: data
            });
        }
    }
}
module.exports = {
    index: function(req, res) {
        Player.find({}, buildQueryHandler(res));
    },
    create: function(req, res) {
        Player.create(req.body, buildQueryHandler(res));
    },
    update: function(req, res) {
        Player.findById(req.params.id, function(err, player) {
            if(err) {
                res.json({
                    message: "Error",
                    error: err
                });
            }
            else {
                player.status[req.body.game_idx] = req.body.status;
                player.markModified("status");
                player.save(buildQueryHandler(res));
            }
        });
    },
    destroy: function(req, res) {
        Player.deleteOne({_id: req.params.id}, buildQueryHandler(res));
    }
}