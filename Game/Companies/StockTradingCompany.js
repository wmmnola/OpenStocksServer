var BaseCompany = require("./BaseCompany");

class StockTradingCompany extends BaseCompany {
  constructor(name, identifer) {
    super(name, 0, identifer, 20);
    this.ownedShares = [];
    this.value = 0;
    this.money = 100;
  }

  calculateValue() {
    var sum = 0;
    for (var i = 0; i < this.ownedShares.length; i++) {
      sum += parseFloat(this.ownedShares[i].price);
    }
    this.value = parseFloat(sum).toFixed(2);
  }

  returnStock(company, num) {
    var stock = [];
    var indexes = []
    for (var i = 0; i < this.ownedShares.length; i++) {
      if (this.ownedShares[i].identifier == company.identifer) {
        stock.push(this.ownedShares[i]);
        indexes.push(i);
      }
      if (stock.length >= (num)) {
        this.unloadStock(indexes);
        return stock;
      }
    }
    throw "Fatal Error, the amount of stock that is being requested is not consistent \n stock length: " +
    stock.length + "\n limit: " + num
  }
  unloadStock(indexes) {
    for (var i = 0; i < indexes.length; i++) {
      var index = parseFloat(indexes[i]);
      this.ownedShares.splice(indexes[i], 1);
    }
  }
}

module.exports = StockTradingCompany;
