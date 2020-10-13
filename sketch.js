var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  object1 = createSprite(600,300,50,50);
  object1.shapeColor = "red";
  object2 = createSprite(600,200,50,50);
  object2.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  var abc = isTouching(movingRect,object2);
  
  if (abc == true)
  {
    object2.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  } 
  else
  {
    object2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  drawSprites();
}

