var ship,shipImg;
var sea,seaImg;
function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  ship = createSprite(150,200);
  ship.addAnimation("movingship",shipImg);
  ship.scale = 0.3
  ship.velocityX = 1;


  sea = createSprite(200,200);
  sea.velocityX = 1;
  sea.scale = .25
  sea.addImage(seaImg);
}

function draw() {
  background("white");
  if(sea.x < 0){
   sea.x = sea.width/8;
  }
  drawSprites();
}