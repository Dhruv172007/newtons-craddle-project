
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	bobObject1=new bob (400,350,80);
	bobObject2=new bob (450,350,80);
	bobObject3=new bob (500,350,80);
	bobObject4=new bob (550,350,80);
	bobObject5=new bob (600,350,80);
	roof1=new roof(500,100,300,20);
	rope1=new Rope(bobObject1.body,roof1.body,-60, 0)
  rope2=new Rope(bobObject2.body,roof1.body,-30, 0)
  rope3=new Rope(bobObject3.body,roof1.body,0, 0)
  rope4=new Rope(bobObject4.body,roof1.body,30, 0)
  rope5=new Rope(bobObject5.body,roof1.body,60, 0)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display()
  roof1.display();

  drawSprites();
 
}



