var bullet
var wall

var speed,weight,thickness;

function setup() {
  createCanvas(1800,400);
  bullet = createSprite(400, 200, 50, 20);
 bullet.shapeColor=color("white")

 speed=random(223,321)
 weight=random(30,52)
 thickness = random(40,70)
 bullet.velocityX=speed

 wall = createSprite(1000, 200,thickness,height/2);
 wall.shapeColor=color("yellow")

 bullet.debug=true
 wall.debug=true
}

function draw() {
  background("black");  

if(hasCollided(bullet,wall))
{
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10)
{
wall.shapeColor=("green")
}

if(damage<10)
{
wall.shapeColor=("red")
}
}

  drawSprites();
}
function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}else{
  return false;
}

}