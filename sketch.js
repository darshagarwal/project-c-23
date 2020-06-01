const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3;
var triangle1;
var box4,box5;
var triangle2;
var box6;
var triangle3;
var box7;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700,300,20,500);
  box2 = new Box(630,300,75,220);
  box3 = new Box(555,325,75,175);
  triangle1 = new Box(630,175,75,50);
  box4 = new Box(468,325,100,150);
  box5 = new Box(380,325,75,175);
  triangle2 = new Box(470,200,90,100);
  box6 = new Box(308,300,75,200);
  triangle3 = new Box(308,175,75,50);
  box7 = new Box(240,300,20,500);


}
function draw() {
  background("black");  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  triangle1.display();
   box4.display();
   box5.display();
   triangle2.display();
   box6.display();
   triangle3.display();
   box7.display();
  drawSprites();
}
