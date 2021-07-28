var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite(150, 250, 30, 30)
}

function draw() 
{
  background(70);
  drawSprites()
  if(keyDown(RIGHT_ARROW)){
    sprite.x = sprite.x + 10
    sprite.shapeColor = 130
  }
  if(keyDown(LEFT_ARROW)){
    sprite.x = sprite.x - 10
    sprite.shapeColor = 20
  }
  if(keyDown(UP_ARROW)){
    sprite.y = sprite.y - 10
    sprite.shapeColor = 190
  }
  if(keyDown(DOWN_ARROW)){
    sprite.y = sprite.y + 10
    sprite.shapeColor = 250
  }

}




