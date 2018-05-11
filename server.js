const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(__dirname + "/teamsAngular/dist/teamsAngular"));
require("./server/config/mongoose");
require("./server/config/routes")(app);
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/teamsAngular/dist/teamsAngular/index.html");
});
app.listen(8000);