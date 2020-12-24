class Chain{
    constructor(body1, pointB){
      
        var options = {
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
       this.chain.bodyA = body;
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB; 
        stroke("black");
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    }
    
}