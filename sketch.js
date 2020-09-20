//var fixedRect;
//var movingRect;

var car;
var wall;

var speed;
var weight;



function setup()
{
 createCanvas(1600,400);
 /*
 fixedRect = createSprite(400,200 , 100, 50);
 fixedRect.shapeColor = ("orange");

 movingRect = createSprite(0,0,50,100);
 movingRect.shapeColor = ("green");
*/

    speed = random(50, 90);
    weight = random(400, 1500);


    car = createSprite(50, 200, 50, 50);
    car.shapeColor = ("blue");
    car.velocityX = speed;
    

    wall = createSprite(1500, 200, 60, weight/2);
    wall.shapeColor = rgb(80,80,80);
    

}

function draw()
{
  background(255,255,255);

/*
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2)
  {
    movingRect.shapeColor = ("red");
    fixedRect.shapeColor = ("red");
  }
  else
  {
    movingRect.shapeColor = ("green");
    fixedRect.shapeColor = ("orange");
  }
  movingRect.x = mouseX;
  movingRect.y = mouseY;
*/

  if(car.x - wall.x <= wall.width/2 + car.width/2 &&
    wall.x - car.x <= wall.width/2 + car.width/2 &&
    wall.y - car.y <= wall.height/2 + car.height/2 &&
    car.y - wall.y <= wall.height/2 + car.height/2)
  {
      var deformation = 0.5 * weight * speed * speed / 22500;
      car.velocityX = 0;
      if (deformation > 180) {
          car.shapeColor = color(255, 0, 0);
      } else if (deformation < 180 && deformation > 100) {
          car.shapeColor = color(230, 230, 0);
      } else if (deformation < 100) {
          car.shapeColor = color(0, 255, 0);
      }
  }
  
    


    
  drawSprites();
}


