var car,wall,speed,weight,deformation;



function setup() {
createCanvas(1600,400);
car = createSprite(50,200,50,50);



speed=random(55,90);
weight=random(400,1500);
wall=createSprite(1500,200,60,height/2);


}
function draw() {
  background(255,255,255);  
  
  car.velocityX=speed;

if(wall.x-car.x<(wall.width+car.width)/2){
 var deformation=0.5*weight*speed*speed/22509;
  car.velocityX=0;

  if(deformation<100){
    car.shapeColor="green";
    
    }
    
    if(deformation>100&&deformation<180){
    car.shapeColor="yellow";
    
    
    }
    
    if(deformation>180){
    car.shapeColor="red";
    
    }

}  



  drawSprites();
}