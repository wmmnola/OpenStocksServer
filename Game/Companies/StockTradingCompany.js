var BaseCompany = require("./BaseCompany");

class StockTradingCompany extends BaseCompany {
  constructor(name, identifer) {
    super(name, 0, identifer, 20);
    this.ownedShares = [];
    this.value = 0;
    this.money = 100;
  }
  buyShares() {

  }
  sellShares() {

  }
  calculateValue() {
    for (var i = 0; i < this.ownedShares.length; i++) {
      this.value += this.ownedShares[i].price;
    }
  }
}

module.exports = StockTradingCompany;
