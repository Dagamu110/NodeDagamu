var socket = io.connect('https://dagamu.herokuapp.com');

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
