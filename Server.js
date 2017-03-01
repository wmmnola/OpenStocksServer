var clients = [];
var connectedSockets = [];

var express = require("express");
var socket = require("socket.io");
var Game = require("./Game/game");
console.log(Game);
var hostSocket;
var running = false;
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
  socket.on("StartGame", gameInit);

  function hostConnected(data) {
    hostSocket = socket;
    var address = socket.handshake.address;
    var c = new client(socket.id, data.role, address);
    console.log("Host COnnected");
    clients.push(c);

    hostSocket.emit("PlayerJoined", c);
  }

  function clientConnected(data) {
    var address = socket.handshake.address;
    var c = new client(socket.id, data.role, address);
    if (!running) {
      clients.push(c);
      connectedSockets.push(socket);
    }
    hostSocket.emit("PlayerJoined", c);
  }

  function gameInit(sockets) {
    running = true;
    Game.main(connectedSockets);
  }
}
var client = function(id, role, ip) {
  this.id = id;
  this.role = role;
  this.ip = ip;
}
