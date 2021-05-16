class Dustbin{
    constructor(x,y,width,hieght){
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1,
        }
        this.body=Bodies.rectangle(x,y,width,hieght,options);
        this.width=width;
        this.hieght=hieght;

        World.add(world, this.body);
    }
display(){
    rectMode(CENTER);
    Fill(255);
    rect(this.body.position.x,this.body.position.y,this.width,this.hieght);
}
}