class Share {
  constructor(comapny, owner) {
    this.company = company;
    this.owner = owner;
  }
  calculateSharePrice() {
    this.price = this.company.value / this.company.shares;
  }
}
