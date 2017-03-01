var BaseCompany = require("./BaseCompany");

class Industry extends BaseCompany {
  constructor(name, value, shares, identifer) {
    super(name, value, identifer, shares);
  }
  buyGoods() {

  }
  produceGoods() {

  }
  randomizeStockPrice() {
    var percentChange = (Math.floor((Math.random() * 20) - 10) / 100);
    var change = (parseFloat(this.value) * percentChange);
    var value = parseFloat(this.value) + change;
    this.value = parseFloat(value).toFixed(3);
    console.log(this.value + " change: " + change + " percentChange: " +
      percentChange);

  }
}

module.exports = Industry;
