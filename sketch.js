
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2

 Runner = createSprite(200, 380)
 Runner.addAnimation("runner",runnerImg)
 Runner.scale = 0.1

 LeftBoundary = createSprite(10, 200, 10, 400)
 LeftBoundary.visible=false
 RightBoundary = createSprite(390, 200, 10, 400)
 RightBoundary.visible=false
}

function draw() {
  background(0);
 if (path.y > 400){
   path.y = height/2
 } 
 Runner.x = mouseX

 Runner.collide (LeftBoundary);
 Runner.collide(RightBoundary);

 drawSprites();
}
