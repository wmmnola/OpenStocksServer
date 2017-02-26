var Industry = require("./Companies/Industry");

function main(sockets) {
  var i = new Industry("fuck you", 10, 5);
  console.log(i.value);
}

module.exports = main;
