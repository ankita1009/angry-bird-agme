const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;

var gameState="onSling";

var backgroundImage;
var ground,box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,bird,log2,log3,log4;
var platform;
var slingshot;

function preload() {
  backgroundImage=loadImage("Images/bg.png");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


platform=new Ground(150,305,300,170)
  box1=new Box(700,320,70,70); 
  box2=new Box(920,320,70,70);     
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  box5=new Box(810,160,70,70);
  ground=new Ground(600,390,1200,20);
  pig1=new Pig(810,350);
  pig2=new Pig(810,220);
  log1=new Log(810,260,20,300,PI/2);
  log2=new Log(810,180,20,300,PI/2);
  log3=new Log(760,120,20,150,PI/7);
  log4=new Log(870,120,20,150,-PI/7);
  bird=new Bird(100,100,50,50);
  slingshot=new Slingshot(bird.body,{x:200,y:50});
 
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
platform.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 ground.display();
 pig1.display();
 pig2.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 bird.display();
 slingshot.display();
}    

function mouseDragged() {
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingshot.fly();
  gameState="launched";
}