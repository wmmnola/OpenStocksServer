var clients = [];

var express = require("express");
var socket = require("socket.io");
var BaseCompany = require("./Companies/BaseCompany");
var Industry = require("./Companies/Industry");


var app = express();
var server = app.listen(3000);
var socket = socket(server);

app.use(express.static("public"));
console.log("Server Startup");

socket.on("connection", newConnection);


function newConnection(socket) {
  console.log("New Connection: " + socket.id);
  clients.push(socket);
  socket.on("test", testCon);
}
socket.on("test", testCon);

function testCon(data) {
  console.log(data);
}
