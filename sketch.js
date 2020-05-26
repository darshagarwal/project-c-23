const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700,320,70,70);
 // box1 = new Box(50,50,10,400);
}
function draw() {
  background("black");  
  Engine.update(engine);

  box1.display();

  drawSprites();
}
