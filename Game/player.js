var STO = require("./Companies/StockTradingCompany");
var Game = require("./game");
console.log(Game);
class Player {
  constructor(socket) {
    this.socket = socket;
    this.id = socket.id;
    this.ready = false;
  }
  nameCompany() {
    this.socket.emit("NameRequest", this.socket.id);
  }
  createCompany(data) {
    console.log(data);
    this.company = new STO(data.name, data.identity);
  }

  update(companies) {
    sendData(this, companies);
    var index = companies.indexOf(this.company);
  }
}

function sendData(player, companies) {

  var payload = {
    playerCompany: player.company,
    companies: companies,
  };
  player.socket.emit("sendData", payload);
}


module.exports = Player;
