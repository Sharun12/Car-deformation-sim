var car, wall;
var speed, weight;

function setup() {
  createCanvas(1500,400);
  
  speed = random(55, 90);
  weight = random(400, 1500);
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
}

function draw() {
  background(255,255,255);  

  car.collide(wall);

    var deformation = (0.5*weight*speed^2)/22509
    console.log(deformation);

    if(deformation > 100) {
      car.shapeColor = color(0, 255, 0);
    }

    if(deformation < 100 && deformation < 180) {
      car.shapeColor = color(230, 230, 0);
    }

    if(deformation < 180) {
      car.shapeColor = color(255, 0, 0);
    }

  drawSprites();
}