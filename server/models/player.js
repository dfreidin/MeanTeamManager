const mongoose = require("mongoose");
const PlayerSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    position: {type: String},
    status: {type: [String], default: ["?", "?", "?"]}
}, {timestamps: true});
mongoose.model("Player", PlayerSchema);