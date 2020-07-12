class Square {
    constructor(x,y,height,width){
    
    this.body = Bodies.rectangle(x,y,height,width);
    this.width = width;
    this.height = height;
    }
    display(){
        fill ("yellow");
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
    }
} 