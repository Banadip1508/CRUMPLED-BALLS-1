
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

dustbin1=createSprite(100,780,50,12)

}


function draw() {
  rectMode(CENTER);
  background(0);
  function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
  }
  }
  drawSprites();
 
}



