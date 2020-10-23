
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	roof=new Roof(300,100,150,15)

	bob1 = new Bob(250,300,24)
	bob2 = new Bob(275,300,24)
	bob3 = new Bob(300,300,24)
	bob4 = new Bob(325,300,24)
	bob5 = new Bob(350,300,24)

	

	rope1= new Rope(roof.body,bob1.body,-50)
	rope2= new Rope(roof.body,bob2.body,-25)
	rope3= new Rope(roof.body,bob3.body,0)
	rope4= new Rope(roof.body,bob4.body,25)
	rope5= new Rope(roof.body,bob5.body,50)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-3,y:-3});

	}
}

