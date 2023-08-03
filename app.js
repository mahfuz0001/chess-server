const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const gameLogic = require("./game-logic");
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (client) => {
  gameLogic.initializeGame(io, client);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Game Server!");
});

server.listen(process.env.PORT || 9060);
