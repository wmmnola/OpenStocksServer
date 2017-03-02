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
    var sum = 0;
    console.log(this.ownedShares);
    for (var i = 0; i < this.ownedShares.length; i++) {
      sum += parseFloat(this.ownedShares[i].price);
      //console.log(parseFloat(this.ownedShares[i].price));
    }
    this.value = parseFloat(sum).toFixed(2);
  }
}

module.exports = StockTradingCompany;
