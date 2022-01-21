
var plane;
function preload(){
   birdImage = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");
   backgroundImage = loadImage("bg.png")
   smashImage =loadAnimation("smash1.png","smash2.png","smash3.png","smash4.png")
   building1 = loadImage("building1.png")
   building2 = loadImage("building2.png")
   building3 = loadImage("building3.png")
   building4 = loadImage("building4.png")
   building5 = loadImage("building5.png")
   planeImage = loadImage("plane.png")
}
var ground
function setup() {
    createCanvas(1000, 600);
    ground = createSprite(300,300,600,10);
    ground.addImage("bg",backgroundImage);
    ground.velocityX = -4
    bird = createSprite(70,70,20,20);
    bird.addAnimation("flying",birdImage);
    bird.scale=0.5
   
   
}
  function draw() {
    background(50,50,50);
   


    if(ground.x<0){
        ground.x = ground.width/2;
    }
    if(keyDown(UP_ARROW)){
        bird.velocityY = -10
    }
    bird.velocityY+=0.5
  
    spawnbuilding();
    spawnplane();
    drawSprites();
}

function spawnbuilding(){
    if (frameCount % 120 === 0){
        var building = createSprite(800,300,10,40);
        building.velocityX = -6;  
        building.lifeTime = 100
        building.scale=1.2
        
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: building.addImage(building1);
                  break;
          case 2: building.addImage(building2);
                  break;
          case 3: building.addImage(building3);
                  break;
          case 4: building.addImage(building4);
                  break;
        
        
          default: break;
}
    }
}

function spawnplane(){
    if (frameCount % 250 === 0){
        var plane = createSprite(00,100,10,40);
        plane.addImage(planeImage)
        plane.velocityX = 4;  
        plane.lifeTime = 100
        plane.scale=0.2;
}
}
