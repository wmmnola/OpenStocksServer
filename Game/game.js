var Industry = require("./Companies/Industry");
var Player = require("./player");
var companies = [];
var STO = require("./Companies/StockTradingCompany");

var players = [];

function main(sockets) {
  var STD = new Industry("Standered Oil", 1000, 50, "STD");
  companies.push(STD)
  var ISC = new Industry("India Steel Company", 200, 20, "ISC");
  companies.push(ISC)
  var IMO = new Industry("Imperial Oil Corporation", 500, 25, "IMO");
  companies.push(IMO);

  for (var i = 0; i < sockets.length; i++) {
    var p = new Player(sockets[i]);
    players.push(p);
    players[i].nameCompany();
    players[i].socket.on("NameReply", nameHandler);
  }

}

function nameHandler(data) {
  console.log(data.id);
  var id = data.id;
  var player = find_id(id, players);
  if (player) player.createCompany(data);
  else throw "Fatal Error";
  companies.push(player.company);
  player.update(companies);

}

function find_id(id, playerlist) {
  for (var i = 0; i < playerlist.length; i++) {
    if (id == playerlist[i].id) return playerlist[i];
  }
  return null;
}

module.exports = {
  main, nameHandler
};
