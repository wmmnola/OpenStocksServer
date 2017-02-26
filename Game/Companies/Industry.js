var BaseCompany = require("./BaseCompany");

class Industry extends BaseCompany {
  constructor(name, value, shares) {
    super(name, value);
    this.shares = shares;
  }
}

module.exports = Industry;
