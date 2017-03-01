var BaseCompany = require("./BaseCompany");

class Industry extends BaseCompany {
  constructor(name, value, shares, identifer) {
    super(name, value, identifer, shares);
  }
  buyGoods() {

  }
  produceGoods() {

  }
}

module.exports = Industry;
