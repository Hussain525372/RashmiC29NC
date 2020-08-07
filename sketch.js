const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var slingshot;
var ball;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  ground = new Ground(600, height, 1200, 20);

  block1 = Bodies.circle(50, 200, 20);
  World.add(world, block1);

  slingshot = new SlingShot(this.ball, {x:100, y:200});

}

function draw() {
  background(255,255,255);  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  Engine.update(engine);
  //block1.display();
  ground.display();
  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}