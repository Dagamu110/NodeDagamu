const express = require("express");
const http = require("http");
const app = express();

app.get('/', ( req , res)  => {
	res.sendFile(__dirname + '/public/index.html');
});
app.get('/app.js', ( req , res)  => {
	res.sendFile(__dirname + '/public/app.js');
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log("Server in port 3000");
});

app.use(express.static('public'));


const sockets = require('socket.io');
const io = sockets(server);

io.sockets.on('connection', (socket) => {
	console.log('Nuevo Usuario Conectado #' + socket.id);
	socket.on('move' , (data) => {
		console.log(data.message);
		socket.broadcast.emit('recive', data.message);
	});
});
