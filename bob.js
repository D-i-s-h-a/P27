class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		//this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		//this.body.debug=true
	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			ellipseMode(CENTER)
			//strokeWeight(4);
			fill(0,255,0)
			//imageMode(CENTER);
			ellipse(0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}