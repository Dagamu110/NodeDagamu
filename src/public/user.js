function user(){
    this.x = 100;
    this.y = 100;

    this.color = 255;

    this.id = socket.id;

    this.dimension = [ 100 , 50];

    this.direction = [0,0]

    this.show = function(){
        fill(this.color);
        rect(this.x , this.y , this.dimension[0] , this.dimension[1]);
        fill(0);
        text('#' + this.id,this.x,this.y + this.dimension[1] + 20);
    }
    this.move = function(x = this.direction[0] ,y = this.direction[1]){
        this.direction[0] = x;
        this.direction[1] = y;

        this.x += this.direction[0];
        this.y += this.direction[1];

        if(this.x >= width - this.dimension[0]){
            this.x = width - this.dimension[0];
        }
        if(this.y >= height - this.dimension[1]){
            this.y = height - this.dimension[1];
        }
        if(this.x <= 0){
            this.x = 0;
        }
        if(this.y <= 0){
            this.y = 0;
        }

        socket.emit('move-sketch', {
            x : this.x,
            y : this.y,
            id : this.id
        });
    }
        
}