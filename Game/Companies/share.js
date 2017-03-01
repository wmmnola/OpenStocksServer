class Share {
  constructor() {}
  calculateSharePrice(company) {
    this.price = company.value / company.shares;
  }
}

module.exports = Share;
