var hero
var gamestate = "start"
var color = 1 
function setup() {
  createCanvas(windowWidth,windowHeight);

  hero = createSprite(windowWidth/2, windowHeight/2, 50, 50);



}

function draw() {
  if (gamestate="start")
  {
  background("darkgrey"); 
textSize(30)
fill ("white")
   text("Click the space key to change color.",windowWidth/4,windowHeight/4+windowHeight/2) 
  if (keyDown("space"))
  {
color=color+1

  }
  if (color>8)
  {
color=color-8

  }
  if (color==1)
  {
hero.shapeColor="lightblue"

  }
  if (color==2)
  {
hero.shapeColor="lightgreen"

  }
  if (color==3)
  {
hero.shapeColor="lightyellow"

  }
  if (color==4)
  {  
hero.shapeColor="red"

  }
  if (color==5)
  {
hero.shapeColor="purple"

  }
  if (color==6)
  {
hero.shapeColor="black"

  }
  if (color==7)
  {
hero.shapeColor="orange"

  }
  if (color==8)
  {
hero.shapeColor="grey"

  }
  }
  drawSprites();
}