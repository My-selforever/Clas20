var move, still;

function setup() {
  createCanvas(800,400);
  still = createSprite(400, 200, 50, 50);
  still.shapeColor = "red";
  move = createSprite(100,200,50,50);
  move.shapeColor = "red";
  move.velocityX = 2;
}

function draw() {
  background(255,255,255);  
 /* move.y = World.mouseY;
  move.x = World.mouseX; */
 
  console.log(still.x-move.x);
  touch();
  Boff();
  drawSprites();
}

function touch()
{
 if (move.x- still.x<=still.width/2+move.width/2 &&
  still.x-move.x<=still.width/2+move.width/2 &&  move.y- still.y<=still.height/2+move.height/2 &&
  still.y-move.y<=still.height/2+move.height/2)
 {
   move.shapeColor = "orange";
   still.shapeColor = "yellow";
 }
 else
 {
   still.shapeColor = "red";
   move.shapeColor = "red";
 }
}

function Boff()
{
  if(move.x- still.x<=still.width/2+move.width/2 &&
    still.x-move.x<=still.width/2+move.width/2 &&  move.y- still.y<=still.height/2+move.height/2 &&
    still.y-move.y<=still.height/2+move.height/2)
    {
      
      move.velocityX = move.velocityX*-1;
    }
}