var socket;

$(document).ready(main);

function main() {
  var identity = {
    role: "host"
  }
  socket = io('http://localhost:3000');
  socket.emit("hostConnection", identity);
  console.log("Emit");
  socket.on("PlayerJoined", addPlayerToRow);
}

function addPlayerToRow(player) {
  console.log("addAPlayer ");
  $('#clients').append('<tr><td>' + player.role + '</td><td>' + player.id +
    '</td><td>' + player.ip + '</td></tr>');
}
