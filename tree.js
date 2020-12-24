class Tree {
    constructor(x,y){
    var options={
       isStatic:true
    }
    this.body= Bodies.rectangle(x,y,450,600, options);
    this.height = 600;
    this.width = 450;
    this.image= loadImage("Plucking mangoes/tree.png")
    World.add(world,this.body);
    }
    display(){
      imageMode(CENTER);
      image (this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}