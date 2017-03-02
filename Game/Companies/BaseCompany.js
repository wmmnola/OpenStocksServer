var Share = require("./share")

class BaseCompany {
  constructor(name, value, identifer, numOfShares) {
    this.name = name;
    this.value = value;
    this.identifer = identifer
    this.shares = [];
    this.money = 0;
    this.issueShares(numOfShares);
  }
  issueShares(numOfShares) {
    this.sharevalue = this.value / numOfShares;
    for (var i = 0; i < numOfShares; i++) {
      var s = new Share();
      s.calculateSharePrice(this);
      this.shares.push(s);
    }
  }
  revalueShares() {
    this.sharevalue = (parseFloat(this.value) / this.shares.length).toFixed(2);
    for (var i = 0; i < this.shares.length; i++) {
      this.shares[i].calculateSharePrice(this);
    }
  }
}

module.exports = BaseCompany;
