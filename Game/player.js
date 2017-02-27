var STO = require("./Companies/StockTradingCompany");

class Player {
  constructor(socket) {
    this.socket = socket;
  }
  nameCompany() {
    this.socket.emit("NameRequest");
    console.log("sent request")
    this.socket.on("NameReplay", function(name) {
      this.name = name;
    });
  }
}

module.exports = Player
