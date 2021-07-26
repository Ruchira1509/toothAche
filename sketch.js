// variable declare
var gameState=0;
var maze, mazeImg;
var player, playerImg;
var startButton, startButtonImg;
var currency, currencyImg
var decayedTeeth, decayedTeethImg
var dentist1, dentist2, dentistImg
var division1, division2, division3, division4, division5, division6, division7, division8;
var division9, division10, division11, division12, division13, division14, division15, division16;
var division17, division18, division19, division20, division21, division22, division23, division24;
var division25, division26, division27, division28, division29, division30, division31, division32;
var mouth, mouthImg;
var homeScreen, homeScreenImg;
var toothGif, toothGifImg;
var dentalArrPosition = [[295, 100],[295, 300],[335, 800],[335, 400]];
var mazePosition = [[400, 110, 10, 150],[299, 150, 70, 10]]
var grpDivision;
var score = 0;

function preload(){
  toothGifImg = loadImage("toothGif.gif");
  toothGif = loadImage("toothGif.gif");
  mazeImg = loadImage("tooth.png");
  currencyImg = loadImage("toothCoin.png");
  decayedTeethImg = loadImage("decayedTeeth.png")
  dentistImg = loadImage("dentists.png");
  playerImg = loadImage("player.png");
  mouthImg = loadImage("mouth.png");
  startButtonImg = loadImage("start.png");
  homeScreenImg = loadImage("homePage.png");
}


function setup(){

  createCanvas(1000,1200);

  // Actual tooth image
  
  maze = createSprite(500, 500, 200, 200);
  maze.addImage(mazeImg);
  maze.scale = 3;

  // Button to start the game
  
  
  //smaller tooth you control
  player = createSprite(330, 750, 50, 50);
  player.addImage(playerImg);
  player.scale = 0.1;
  player.visible = true

  
  grpDivision = new Group();

  // Maze structure creation
  mazeCreation()

  // dental hospital image
  dentist1 = createSprite(295, 100);
  dentist1.addImage(dentistImg);
  dentist1.scale = 0.32;

  // dental hospital image
  dentist2 = createSprite(660, 800);
  dentist2.addImage(dentistImg);
  dentist2.scale = 0.32;

  mouth = createSprite(335, 800, 20, 20);
  mouth.addImage(mouthImg);
  mouth.scale = 0.4;

  homeScreen = createSprite(500, 600);
  homeScreen.addImage(homeScreenImg);
  homeScreen.visible = true

  startButton = createSprite(910, 30, 100, 50);
  startButton.visible = true;
  startButton.addImage(startButtonImg);
  homeScreen.scale = 1.1;
  startButton.scale = 0.3;


}

function draw() {
  background(79, 200, 233);
  if (mousePressedOver(startButton)&&gameState===0) {
    startButton.visible = false;
    console.log(gameState);
    gameState=1;
    homeScreen.visible = false
  }  


  
  if (keyDown("up")) {
    player.y-=3;
  }
  if (keyDown("down")) {
    player.y+=3;
  }
  if (keyDown("left")) {
    player.x-=3;
  }
  if (keyDown("right")) {
    player.x+=3;  }  

    //if (condition1 || condition2 || condition3) or we can add a group
    if(player.isTouching(grpDivision)){
    }
  
  /* 0,1,2,3
  var randPosLeft = Math.round.random(0,1)
  var randPosRight = Math.round.random(2,3)

  depending on value change the y position 
  dentist2.x = dentalArrPosition[randPosRight][0].x
  dentist2.y = dentalArrPosition[randPosRight][1].y
  */

  drawSprites();
  //stroke("white");
  strokeWeight(10)
  fill(67, 133, 164)
  textSize(90)
  text("TOOTH ACHE!", 15, 1100)
  if (gameState===0){
    startButton.visible = true
  }

  textSize(20)
  strokeWeight(1)
    text("Score: "+score, 900,100)

}

// User defined functions
function mazeCreation(){
  // Top right vertical line 1 next to top left dental hospital

 division1 = createSprite(400, 110, 10, 150);//50 pixel gap
  division1.shapeColor="black";
  if(player.isTouching(division1)){
    player.visible = false
  }

  // horizontal line 1 below top left dental hospital
  division2 = createSprite(299, 150, 70, 10);
  division2.shapeColor="black"; 
  if(player.isTouching(division2)){
    player.visible = false
  }

   // horizontal line 2 below top left dental hospital
   division3 = createSprite(299, 200, 100, 10);
  division3.shapeColor="black";
  if(player.isTouching(division3)){
    player.visible = false
  }

   // horizontal line 3 below top left dental hospital
  division4 = createSprite(298, 250, 210, 10);
  division4.shapeColor="black";
  if(player.isTouching(division4)){
    player.visible = false
  }

  // vertical line 2  next horizontal line 3 top left dental hospital
  division5 = createSprite(400, 300, 10, 150);
  division5.shapeColor="black";
  if(player.isTouching(division5)){
    player.visible = false
  }

   // horizontal line 1 middle beside horizontal line 2 
  division6 = createSprite(550, 200, 200, 10);
  division6.shapeColor="black";
  if(player.isTouching(division6)){
    player.visible = false
  }

  // vertical line 1 middle beside vertical line 1 (left) 

  division7 = createSprite(500, 110, 10, 80);//50 pixel gap
  division7.shapeColor="black";
  if(player.isTouching(division7)){
    player.visible = false
  }


  // hr. line 3 middle beside vertical line 2 

  division8 = createSprite(450, 380, 120, 10);
  division8.shapeColor="black";
  if(player.isTouching(division8)){
    player.visible = false
  }


  // vertical line 2 middle beside vertical line 2 (left) 
  division9 = createSprite(500, 290, 10, 100);
  division9.shapeColor="black";
  if(player.isTouching(division9)){
    player.visible = false
  }

    // hr. line 1 middle beside vertical line 1
  division10 = createSprite(500, 150, 70, 10);
  division10.shapeColor="black";
  if(player.isTouching(division10)){
    player.visible = false
  }


 // vertical. line 2 left
  division11 = createSprite(700, 200, 10, 100);
  division11.shapeColor="black";
  if(player.isTouching(division11)){
    player.visible = false
  }


  /* Overlapping vertical line 2 middle
  division12 = createSprite(500, 300, 10, 100);
  division12.shapeColor="red";
  if(player.isTouching(division12)){
    player.visible = false
  }
  */


  // vertical. line 1 left

  division13 = createSprite(600, 100, 10, 100);
  division13.shapeColor="black";
  if(player.isTouching(division13)){
    player.visible = false
  }

      // hr. line 2 middle beside vertical line 1

  division14 = createSprite(600, 280, 100, 10);
  division14.shapeColor="black";
  if(player.isTouching(division14)){
    player.visible = false
  }

 
  division15 = createSprite(500, 290, 10, 100);
  division15.shapeColor="black";
  if(player.isTouching(division15)){
    player.visible = false
  }

  division16 = createSprite(450, 380, 120, 10);
  division16.shapeColor="black";
  if(player.isTouching(division16)){
    player.visible = false
  }

  division17 = createSprite(450, 380, 420, 10);
  division17.shapeColor="black";
  if(player.isTouching(division17)){
    player.visible = false
  }

  division18 = createSprite(300, 500, 10, 170);
  division18.shapeColor="black";
  if(player.isTouching(division18)){
    player.visible = false
  }

  division19 = createSprite(400, 500, 185, 10);
  division19.shapeColor="black";
  if(player.isTouching(division19)){
    player.visible = false
  }

  division20 = createSprite(400, 450, 120, 10);
  division20.shapeColor="black";
  if(player.isTouching(division20)){
    player.visible = false
  }

  division21 = createSprite(250, 700, 50, 10);//50 pixel gap
  division21.shapeColor="black";
  if(player.isTouching(division21)){
    player.visible = false
  }

  division22 = createSprite(410, 700, 100, 10);
  division22.shapeColor="black";
  if(player.isTouching(division22)){
    player.visible = false
  }

  division23 = createSprite(500, 550, 10, 120);
  division23.shapeColor="black";
  if(player.isTouching(division23)){
    player.visible = false
  }

  division24 = createSprite(700, 550, 10, 210);
  division24.shapeColor="black";
  if(player.isTouching(division24)){
    player.visible = false
  }

  division25 = createSprite(600, 550, 100, 10);
  division25.shapeColor="black";
  if(player.isTouching(division25)){
    player.visible = false
  }

  division26 = createSprite(600, 450, 100, 10);
  division26.shapeColor="black";
  if(player.isTouching(division26)){
    player.visible = false
  }

  division27 = createSprite(600, 500, 10, 100);
  division27.shapeColor="black";
  if(player.isTouching(division27)){
    player.visible = false
  }

  division28 = createSprite(660, 710, 150, 10);
  division28.shapeColor="black";
  if(player.isTouching(division28)){
    player.visible = false
  }

  division29 = createSprite(250, 520, 10, 290);//50 pixel gap
  division29.shapeColor="black";
  if(player.isTouching(division29)){
    player.visible = false
  }
  
  division30 = createSprite(360, 550, 120, 10);
  division30.shapeColor="black";
  if(player.isTouching(division30)){
    player.visible = false
  }

  division31 = createSprite(400, 630, 130, 10);//50 pixel gap
  division31.shapeColor="black";
  if(player.isTouching(division31)){
    player.visible = false
  }

  division32 = createSprite(570, 40, 350, 10);
  division32.shapeColor="black";
  if(player.isTouching(division32)){
    player.visible = false
  }


  /*
    for (var i=0; i<mazePosition.length;i++){
    d = createSprite(mazePosition[i][0],mazePosition[i][1],mazePosition[i][2],mazePosition[i][3]);
    d.shapeColor="black";
    grpDivision.add(d);
  }
  */

  /*
    grpDivision.add(division1); 
    grpDivision.add(division2); 
    grpDivision.add(division3); 
  */
}
// link for gif: https://editor.p5js.org/kjhollen/sketches/S1bVzeF8Z