const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/team_manager");
require("../models/player");