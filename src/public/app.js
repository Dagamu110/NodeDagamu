var socket = io.connect('https://dagamu.herokuapp.com');

var btn_move = document.getElementById('move');
var btn_send = document.getElementById('send');

var input_chat = document.getElementById('chat');

socket.on('recive', function(message){
    alert(message);
});

btn_move.addEventListener('click', function(){
    console.log('move');
    socket.emit('move', {
        message : 'move'
    });
});

btn_send.addEventListener('click', function(){
    socket.emit('move', {
        message : input_chat.value
    });
});
