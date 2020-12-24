class Stone{
    constructor(x, y) {
        var soptions = {
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y,50, 50, soptions);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,50,50);
      }
    }