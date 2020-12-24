class Mango{
    constructor(x,y,r){
    var options={
     isStatic:true,
     restitution:0,
     friction:1
    }
    this.body= Bodies.circle(x,y,r, options);
    this.radius = r;
    this.image= loadImage("Plucking mangoes/mango.png");
    World.add(world, this.body);
    } 
    display(){
     var angle = this.body.angle; 
     var pos = this.body.position;
     push ();
     translate(pos.x, pos.y);
     rotate (angle);
    imageMode(CENTER);
    image (this.image, 0, 0, this.radius, this.radius);
     pop ();
    }
}