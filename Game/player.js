var STO = require("./Companies/StockTradingCompany");

class Player {
  constructor(socket) {
    this.socket = socket;
    console.log(this.socket);
  }
  nameCompany() {
    this.socket.emit("NameRequest");
  }
  createCompany(data) {
    this.company = new STO(data.name, data.identifer);
  }
  send() {
    sendData(this);
  }
}

function sendData(player) {
  console.log();
  var payload = {
    company: player.company
  };
  player.socket.emit("sendData", "test");
}


module.exports = Player;
