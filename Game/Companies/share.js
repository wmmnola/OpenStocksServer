class Share {
  constructor() {}
  calculateSharePrice(company) {
    this.price = (parseFloat(company.value) / company.shares.length).toFixed(
      2);
  }
}

module.exports = Share;
