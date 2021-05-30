
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, treeimg;
var ground;
var apple1, apple, apple3, apple4, apple5, apple, apple7, apple8;
var boy, boyImg;
var boy2, boy2img;
var form,system,code,security, score = 0;
var award;
var awardImg;
function preload(){
	boyImg = loadImage("boy.png");
	boy2img = loadImage("boy1.png");
	awardImg = loadImage("award.png");
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	award = createSprite(300, 625, 50, 50);
	award.addImage("img", awardImg);
	award.scale = 0.5;
	award.visible = false;

	boy2 = createSprite(250, 250, 4, 4);
	boy2.addImage("img", boy2img);
	boy2.scale = 0.3;
	boy2.visible = true;
	
	//boy sprite...
	boy = createSprite(640, 600, 20, 5);
	boy.addImage("image", boyImg);
	boy.scale = 0.66;
	//tree object...
	tree = new Tree(750, 428, 450, 550);
	//ground object...
	ground = new Ground(500, 690, 1000, 20);
	//mango objects...
	apple1 = new Apple(570, 360, 40);
	apple2 = new Apple(690, 380, 60);
	apple3 = new Apple(820, 400, 80);
	apple4 = new Apple(740, 340, 40);
	apple5 = new Apple(850, 300, 50);
	apple6 = new Apple(690, 300, 45);
	apple7 = new Apple(875, 270, 40);
	apple8 = new Apple(740, 230, 40);

	security = new Security();
    system = new System();
	Engine.run(engine);
}


function draw() {
  background("lightblue");

  //tree display...
  tree.display();
  //ground display...
  ground.display();
  //mangoes objects...
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();
  apple7.display();
  apple8.display();

  clues();
  security.display();

  textSize(30);
  fill("brown");
  text("Score: " + score, 850, 50);

  if(score === 1) {
    fill("black")
    textSize(40);
    text("great, you know who he is......",250, 200);
	award.visible = true;
	boy2.visible = false;
  }


  drawSprites();
 }

function isTouching(object1, object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2 
      && object1.x - object2.x < object2.width/2 - gameobject1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object1.y - object2.y < object2.height/2 - object1.height/2) {
     return true;
    }
    else{
      return false;
    }
  }

