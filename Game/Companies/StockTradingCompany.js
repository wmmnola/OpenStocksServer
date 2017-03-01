var BaseCompany = require("./BaseCompany");

class StockTradingCompany extends BaseCompany {
  constructor(name, identifer) {
    super(name, 0, identifer, 20);
    this.ownedShares = [];
  }
  buyShares() {

  }
  sellShares() {

  }
}

module.exports = StockTradingCompany;
