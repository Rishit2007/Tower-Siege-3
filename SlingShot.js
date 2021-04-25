class Sling{
    constructor(body1, point1){
        var options = {
            bodyA: body1,
            pointB: point1,
            stiffness: 0.04,
            length: 10
        }
        this.point1 = point1;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly()
    {
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }

    display(){
        fill("orange");
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.point1;
        
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}