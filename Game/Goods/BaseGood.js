class BaseGood {
  constructor(value, supply) {
    this.supply = supply;
    this.value = value;
  }
  calculateSupply(supply) {
    this.value += (this.supply - supply);
    this.supply = supply;
  }

}

module.exports = BaseGood;
