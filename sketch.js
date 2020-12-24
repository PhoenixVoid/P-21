var bullet, wall;
var speed, weight;
var bulletRightEdge, lbullet;
var wallLeftEdge, lwall

function preload() {

  speed = random(55, 90);
  weight = random(400, 1500);

}

function setup() {
  createCanvas(1400,400);
  
  bullet = createSprite(50, 200, 50, 50);

}

function draw() {
  background(0);  
  
  wall = createSprite(1300, 200, 60, height/2);
  wall.shapeColor = "80, 80, 80";

  bullet.velocityX = speed;

  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed *speed/(thickness * thickness * thickness);
    
    if (damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();

}

function hasCollided(lbullet, lwall) {

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x

  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false

}