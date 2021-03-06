class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 0
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
         var posA = this.chain.bodyA.position;
        var posB = this.pointB;
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y); 
        }
        
    }
    
    fly(){
        this.chain.bodyA=null
    }
}