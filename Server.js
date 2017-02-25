var clients = [];
var sockets = [];

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
  console.log("wtf");

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
      sockets.push(socket);
    }
    hostSocket.emit("PlayerJoined", c);
  }

  function gameInit(sockets) {
    running = true;
    Game();
  }
}
var client = function(id, role, ip) {
  this.id = id;
  this.role = role;
  this.ip = ip;
}
