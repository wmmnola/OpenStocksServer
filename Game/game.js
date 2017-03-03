var Industry = require("./Companies/Industry");
var Player = require("./player");
var companies = [];
var primaries = [];
var goods = [];
var STO = require("./Companies/StockTradingCompany");

var players = [];

function main(sockets) {
  var STD = new Industry("Standered Oil", 1000, 50, "STD");
  companies.push(STD)
  primaries.push(STD);
  var ISC = new Industry("India Steel Company", 200, 20, "ISC");
  companies.push(ISC);
  primaries.push(ISC);
  var IMO = new Industry("Imperial Oil Corporation", 500, 25, "IMO");
  companies.push(IMO);
  primaries.push(IMO);

  for (var i = 0; i < sockets.length; i++) {
    var p = new Player(sockets[i]);
    players.push(p);
    players[i].nameCompany();
    players[i].socket.on("NameReply", nameHandler);
    players[i].socket.on("endTurn", endTurnHandler);
  }

}

function nameHandler(data) {
  var id = data.id;
  var player = find_id(id, players);
  player.createCompany(data);
  companies.push(player.company);
  player.update(companies);

}

function find_id(id, playerlist) {
  for (var i = 0; i < playerlist.length; i++) {
    if (id == playerlist[i].id) return playerlist[i];
  }
  throw "Fatal Error, Id not valid";
}

function endTurnHandler(data) {
  // do something with data
  var id = data.id;
  var player = find_id(id, players);
  player.ready = true;
  if (data.buy_orders) {
    for (var i = 0; i < data.buy_orders.length; i++) {
      var company = find_company_identifier(data.buy_orders[i].company);
      company.sellStock(player, data.buy_orders[i]);
    }
  }
  if (data.sell_orders) {
    for (var i = 0; i < data.sell_orders.length; i++) {
      var company = find_company_identifier(data.sell_orders[i].company);
      company.buyBackStock(player, data.sell_orders[i]);
    }
  }
  updateStock();
  if (all_players_ready()) nextGamePhase();
}

function find_company_identifier(company) {
  for (var i = 0; i < companies.length; i++) {
    if (companies[i].identifer == company.identifer) return companies[i];
  }
  throw "Fatal Error: Comapny doesnt exit"
}

function all_players_ready() {
  for (var i = 0; i < players.length; i++) {
    console.log(players[i].company.name + " is ready? " + players[i].ready);
    if (players[i].ready == false) return false;
  }
  return true;
}

function updateStock() {
  for (var i = 0; i < players.length; i++) {
    players[i].socket.emit("stockUpdate", companies);
  }
}

function nextGamePhase() {
  console.log("all players ready");
  for (var i = 0; i < primaries.length; i++) {
    primaries[i].randomizeStockPrice();
  }
  for (var i = 0; i < companies.length; i++) {
    companies[i].revalueShares();
  }
  for (var i = 0; i < players.length; i++) {
    players[i].ready = false;
    players[i].company.calculateValue();
    players[i].company.revalueShares();
  }

  for (var i = 0; i < players.length; i++) {
    players[i].update(companies);
  }
}
module.exports = {
  main, nameHandler
};
