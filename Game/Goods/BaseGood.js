class BaseGood {
  constructor(value, supply, demand) {
    this.value = value;
    this.supply = supply;
    this.demand = demand;
  }
  buyGood() {
    this.supply -= 1;
    this.demand += 1;
  }
  sellGood() {
    this.supply += 1;
    this.demand += 1;
  }
}

module.exports = BaseGood;
