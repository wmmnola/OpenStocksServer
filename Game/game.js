var Industry = require("./Companies/Industry");
var Player = require("./player")
var players = [];

function main(sockets) {
  var i = new Industry("fuck you", 10, 5);
  console.log(i.value);
  for (var i = 0; i < sockets.length; i++) {
    var p = new Player(sockets[i]);
    players.push(p);
    players[i].nameCompany();
  }
  console.log(players);

}

module.exports = main;
