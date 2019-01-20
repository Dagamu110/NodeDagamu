const express = require("express");
const http = require("http");
const app = express();

app.set('port', process.env.PORT || 80 );

app.get('/', ( req , res)  => {
	res.sendFile(__dirname + '/public/index.html');
});
app.get('/app.js', ( req , res)  => {
	res.sendFile(__dirname + '/public/app.js');
});
app.get('/sketch.js', ( req , res)  => {
	res.sendFile(__dirname + '/public/sketch.js');
});
app.get('/user.js', ( req , res)  => {
	res.sendFile(__dirname + '/public/user.js');
});

var server = app.listen(app.get('port'), () => {
	console.log('Servidor escuchando en puerto ' + app.get('port'));
});

const sockets = require('socket.io');
const io = sockets(server);

io.sockets.on('connection', (socket) => {
	console.log('Nuevo Usuario Conectado #' + socket.id);
	socket.on('move' , (data) => {
		console.log(data.message);
		socket.broadcast.emit('recive', data.message);
	});
	socket.on('move-sketch' , (data) => {
		socket.broadcast.emit('show', data);
	});
});
io.sockets.on('disconnect', (socket) => {
	console.log('El usuario #' + socket.id + ' se ha desconectado.');
});
