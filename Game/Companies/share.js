class Share {
  constructor() {}
  calculateSharePrice(company) {
    this.price = (parseFloat(company.value) / company.numOfShares).toFixed(
      2);
    ///console.log(company.value + "/" + company.numOfShares + "=" + this.price);
  }
}

module.exports = Share;
