var u;
var other;

function setup () {
    createCanvas(900,450);
    u = new user();
    other = [];
    socket.on('show', function(data){
        var existe = false;
        for(var i = 0 ; i <= other.length - 1; i++){
            if(other[i].id == data.id ){
                other[i].x = data.x;
                other[i].y = data.y;
                existe = true;
            }
        }
        if(!existe){
            other.push(new user());
            other[other.length - 1].id = data.id;
            other[other.length - 1].color = [255,0,0];
        }
    });
}
function draw(){
    background(70);
    u.show();
    u.move();
    for(var i = 0; i <= other.length - 1 ; i++){
        other[i].show();
    }
    
}

function keyPressed(){
    if(key == 'w'){
        u.move(0,-1);
    }
    if(key == 's'){
        u.move(0,1);
    }
    if(key == 'a'){
        u.move(-1,0);
    }
    if(key == 'd'){
        u.move(1,0);
    }if( keyCode == 32){
        u.move(0,0);
    }
}


