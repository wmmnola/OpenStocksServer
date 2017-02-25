var clients = [];

var express = require("express");
var socket = require("socket.io");
var BaseCompany = require("./Companies/BaseCompany");
var Industry = require("./Companies/Industry");
var hostSocket;

var app = express();
var server = app.listen(3000);
var socket = socket(server);

app.use(express.static("public"));
console.log("Server Startup");

socket.on("connection", newConnection);


function newConnection(socket) {
  console.log("New Connection: " + socket.id);
  socket.on("clientConnection", clientConnected);
  socket.on("hostConnection", hostConnected);

  function hostConnected(data) {
    hostSocket = socket;
    var address = socket.handshake.address;
    var c = new client(socket.id, data.role, address);
    clients.push(c);

    hostSocket.emit("PlayerJoined", c);
  }

  function clientConnected(data) {
    var address = socket.handshake.address;
    var c = new client(socket.id, data.role, address);
    clients.push(c);
    hostSocket.emit("PlayerJoined", c);
  }
}
var client = function(id, role, ip) {
  this.id = id;
  this.role = role;
  this.ip = ip;
}
