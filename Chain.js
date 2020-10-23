class Rope{
    constructor(bA, bB,oX){
        this.oX= oX
        //this.oY=oY
        var options = {
            bodyA: bA,
            bodyB: bB,
            pA: {x:this.oX, y: this.y-12.5}
        }
        this.rope= Constraint.create(options)
        World.add(world,this.rope)

    }
    display(){
        var pA=this.rope.bodyA.position
        var pB=this.rope.bodyB.position
        
        fill("yellow")
        strokeWeight(2.50)
        line (pA.x+this.oX, pA.y, pB.x, pB.y-7.5)
        
    }
}