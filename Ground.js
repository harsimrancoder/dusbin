class Ground{
constructor(x,y,width,hight) {
    var options ={
        isStatic: true,
        'restitution':0,
        'friction':0,
        'density':1,
    }
this.body=Bodies.rectangle(x,y,width,hight,options);
this.width = width;
this.hight=hight;

World.add(world,this.body)
}


display(){
rectMode(CENTER);
Fill(255);
rect(this.body.position.x,this.body.position.y,this.width,this.hight);

}
}