const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var t

var ground;
var left;
var right;
var won = false;


var ball;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(600,390,1200,20);
  right = new Ground(1100,350,20,120);
  left = new Ground(800,350,20,120);

  var options = {restitution:0.3000};
  fill("red")
  ball = Bodies.circle(12,35,20, options);
  World.add(world,ball);




  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{

  background(51);
  

  if(keyIsDown(RIGHT_ARROW) && won == false){
    hforce();
  }
  if(keyIsDown(UP_ARROW)&& won == false){
    vforce();
  }
  if(ball.position.x > 800 && ball.position.x<1100 && ball.position.y > 300){
	win();
	won = true;
  }
  

  ellipse(ball.position.x, ball.position.y, 20,20);
  ground.show();

  left.show();
  right.show();
  Engine.update(engine);
  drawSprites();
}
function hforce(){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.005, y:0});
  }
  function vforce(){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.005});
  }

function win(){
	fill("red");
	textSize(100);
	text("Score!", 200, 200)
}
