var Share = require("./share")

class BaseCompany {
  constructor(name, value, identifer, numOfShares) {
    this.name = name;
    this.value = value;
    this.identifer = identifer
    this.shares = [];
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
}

module.exports = BaseCompany;
