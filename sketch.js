
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(900,180,30);
	mango3=new mango(1000,80,30);
	mango4=new mango(1050,190,30);
	mango5=new mango(1100,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1= new stone(230,420,20,20);
	SlingShot1= new SlingShot(stone1.body,{x:230,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  SlingShot1.display();
  groundObject.display();

 detectollision(stone1,mango1);
detectollision(stone1,mango2);
detectollision(stone1,mango3);
 detectollision(stone1,mango4);
detectollision(stone1,mango5);
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
	SlingShot1.fly();
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
	
}
}
