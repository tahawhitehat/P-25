
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj
function preload(){
	
}

function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj = new paper(100,50,25,25)
    paperObj.scale = 0.3
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  groundObject.display();
  dustbinObj.display();
  paperObj.display();
  keyPressed();
}
function keyPressed(){
	if (keyCode === 32) {
//		paperObj.body.position.x = 500
		paperObj.body.position.x = (dustbinObj.leftWallBody.position.x +  dustbinObj.rightWallBody.position.x)/2
		paperObj.body.position.y = dustbinObj.bottomBody.position.y - dustbinObj.dustbinHeight/2
	}
  
}

