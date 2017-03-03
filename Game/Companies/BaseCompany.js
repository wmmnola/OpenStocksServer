var Share = require("./share")

class BaseCompany {
  constructor(name, value, identifer, numOfShares) {
    this.name = name;
    this.value = value;
    this.identifer = identifer
    this.shares = [];
    this.selfOwnedSock = [];
    this.money = 0;
    this.numOfShares = numOfShares;
    this.issueShares(numOfShares);
  }
  issueShares(numOfShares) {
    this.sharevalue = this.value / numOfShares;
    for (var i = 0; i < numOfShares; i++) {
      var s = new Share(this.identifer);
      s.calculateSharePrice(this);
      this.shares.push(s);
      this.selfOwnedSock.push(s);
    }
  }
  revalueShares() {
    this.sharevalue = (parseFloat(this.value) / this.shares.length).toFixed(2);
    for (var i = 0; i < this.shares.length; i++) {
      this.shares[i].calculateSharePrice(this);
    }
    //console.log(this.identifer + ":" + this.value);
  }
  sellStock(player, order) {
    //console.log(order);
    for (var i = 0; i < order.buyAmount; i++) {
      player.company.ownedShares.push(this.shares[i]);

      //this.money += parseFloat(this.shares[i].price).toFixed(2);
    }
    this.selfOwnedSock.splice(0, order.buyAmount);
    player.company.money -= parseFloat(order.total).toFixed(2);
    this.money += parseFloat(order.total).toFixed(2);
    this.money = parseFloat(this.money).toFixed(2);
  }
  buyBackStock(player, order) {
    var stock_list = player.company.returnStock(this, order.sellAmount);
    player.company.unloadStock(stock_list);
    for (var i = 0; i < stock_list.length; i++) {
      this.selfOwnedSock.push(stock_list[i]);
    }
    this.subtractMoney(order.total);
    player.company.addMoney(order.total)

  }
  addMoney(amountToAdd) {
    this.money = parseFloat(this.money) + parseFloat(amountToAdd);
    console.log(this.money);
  }
  subtractMoney(amount) {
    this.money = parseFloat(this.money) - parseFloat(amount);
  }
}

module.exports = BaseCompany;
