
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, boyImage;
function preload()
{
  boyImage= loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;


	boy=createSprite(150,625, 10,10);
	boy.addImage(boyImage);
	boy.scale=0.1;
	Mtree = new Tree(875,370);
	ground = new Ground(600,690,1200,10);
	stone = new Stone(100,200);
	mango1 = new Mango(725,280,50);
	mango2 = new Mango(800,210,45);
	mango3 = new Mango(835,310,45);
	mango4 = new Mango(900,140,45);
	mango5 = new Mango(915,230,45);
	mango6 = new Mango(980,260,45);
	mango7 = new Mango(1030, 290,45);
	chain = new Chain(stone.body,{x:100, y:565});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  drawSprites();
  Mtree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
 
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7); 

  chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function detectcollision(lstone, lmango){
	 mangoBodyPosition=lmango.body.position
	 stoneBodyPosition=lstone.body.position
var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lstone.r+lmango.r+5){
		Matter.Body.setStatic(lmango.body, false);
	}
} 

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:325, y:420});
		chain.attach(stone.body);
	}
	}



