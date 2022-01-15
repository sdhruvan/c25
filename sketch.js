const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

function preload(){
//find the bug in the below code
	dustbin = loadImage("dustbin.png");
	paper = loadImage("paper.png");

}


function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,470,width,20);
	leftSide = new Ground(800,400,10,120);
	rightSide = new Ground(920,400,10,120);
	bottomSide = new Ground(850,450,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(CENTER);
		//use image() command to add paper image to the ball
image(paper,ball.position.x,ball.position.y,radius,radius);

	// use image() command to add dustbin image in the canvas.
	image(dustbin,850, 360, 200,200);
	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:42,y:-42});
    
  	}
}
