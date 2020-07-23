const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;

var ground,box1,box2;
var pig;
var log,bird;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1=new Box(700,320,70,70);
  box2=new Box(920,300,70,70);
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  ground=new Ground(600,390,1200,20);
  pig1=new Pig(810,350);
  pig2=new Pig(810,220);
  log1=new Log(810,260,20,300,PI/2);
  log2=new Log(810,180,20,300,PI/2);
  log3=new Log(760,120,20,150,PI/7);
  log4=new Log(870,120,20,150,-PI/7);
  bird=new Bird(100,100,50,50);
 
}

function draw() {
  background("white");  
  Engine.update(engine);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 ground.display();
 pig1.display();
 pig2.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 bird.display();
}    