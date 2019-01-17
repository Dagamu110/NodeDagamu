var socket = io.connect('http://localhost:3000');

var btn_move = document.getElementById('move');

socket.on('recive', function(message){
    console.log(message);
});

btn_move.addEventListener('click', function(){
    console.log('move');
    socket.emit('move', {
        message : 'move'
    });
});