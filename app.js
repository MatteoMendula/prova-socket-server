/*
const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const port = process.env.PORT || 8000;
io.listen(port);
console.log('listening on port ', port);
*/

var socket = require('socket.io');
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

var io = socket.listen(server);

var port = process.env.PORT || 8000

server.listen(port, () => {
	console.log("listening on port "+port);
});