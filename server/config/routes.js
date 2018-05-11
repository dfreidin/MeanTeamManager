const players = require("../controllers/players");
module.exports = function(app) {
    app.get("/api/players", players.index);
    app.post("/api/players", players.create);
    app.patch("/api/players/:id", players.update);
    app.delete("/api/players/:id", players.destroy);
}