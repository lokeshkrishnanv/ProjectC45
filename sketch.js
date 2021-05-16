var player;
var orbs;
var rand
var map;
var score = 0;

function preload(){
  mapIMG = loadImage("map.jpg")
  greenIMG = loadImage("green.png");
  redIMG = loadImage("red.png");
  pinkIMG = loadImage("pink.png");
  blueIMG = loadImage("blue.png");
  whiteIMG = loadImage("white.png");
  yellowIMG = loadImage("yellow.png");
  indigoIMG = loadImage("indigo.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  orbs1 = new Group();
  map = createSprite(displayWidth/2, displayHeight/2, 1600, 1600)
  map.addImage("mapIMG", mapIMG)
  map.scale = 10;
  player = createSprite(displayWidth/2, displayHeight/2, 30, 30);
}

function draw() {
  background("brown"); 
  randOrbs(); 
  camera.x = player.x;
  camera.y = player.y

  if(keyIsDown(UP_ARROW)){
    player.velocityY = -3;
  } else{
    player.velocityY = 0;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.velocityY = 3;
  } else{
    player.velocityY = 0;
  }

  if(keyIsDown(LEFT_ARROW)){
    player.velocityX = -3;
  } else{
    player.velocityX = 0;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.velocityX = 3;
  } else{
    player.velocityX = 0;
  }

  if(player.isTouching(orbs1)){
    score = score+1;
    orbs1.destroyEach(orbs)
  }
  drawSprites();
  text("Score: " + score, player.x, player.y);
}

function randOrbs(){
  if(frameCount % 10 === 0){
    orbs = createSprite(10, 10, 10 ,10);
    orbs.shapeColor = "lightgreen"
    var rand = Math.round(random(1,7));
    switch(rand){
      case 1:orbs.addAnimation("redIMG", redIMG);
      orbs.scale = (random(0.2, 0.4))
      break;
      case 2:orbs.addAnimation("yellowIMG", yellowIMG);
      orbs.scale = (random(0.2, 0.4))
      break;
      case 3:orbs.addAnimation("greenIMG", greenIMG);
      orbs.scale = (random(0.2, 0.4))
      break;
      case 4:orbs.addAnimation("blueIMG", blueIMG);
      orbs.scale = (random(0.2, 0.4))
      break;
      case 5:orbs.addAnimation("indigoIMG", indigoIMG);
      orbs.scale = (random(0.2, 0.4))
      break;
      case 6:orbs.addAnimation("pinkIMG", pinkIMG);
      orbs.scale = (random(0.2, 0.4))
      break;
      case 7:orbs.addAnimation("whiteIMG", whiteIMG);
      orbs.scale = (random(0.2, 0.4))
      break;
      default:break;
    }
    orbs.x = Math.round(random(displayWidth-displayWidth-400, displayWidth+displayWidth+400));
    orbs.y = Math.round(random(displayHeight-displayHeight-250, displayHeight+displayHeight+250))
    orbs1.add(orbs);
  }
}