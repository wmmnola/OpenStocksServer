var BaseCompany = require("./BaseCompany");

class StockTradingCompany extends BaseCompany {
  constructor(name, identifer) {
    super(name, 0, identifer);
  }
}

module.exports = StockTradingCompany;
