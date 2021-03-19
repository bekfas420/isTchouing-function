var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "blue";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "blue";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    gameObject2.shapeColor="blue";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

