var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(600,400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,40,40);
  gameObject2 = createSprite(200,100,40,40);
  gameObject3 = createSprite(300,100,40,40);
  gameObject4 = createSprite(400,100,40,40);

  //fixedRect.velocityY = 5;
  //movingRect.velocityY = -5;

  gameObject3.velocityX = 4;
  gameObject4.velocityX = -4;

  
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  
  bounceOff(gameObject3,gameObject4);
  drawSprites();
}

