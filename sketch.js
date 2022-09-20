//Assigning all the necessary global variables.
var path, gazelle;
var badguy1, badguy2, badguy3;
var pathImg, gazelleAnimation, gazelleCollided;

var badguyLionImg, badguyTigerImg, badguyHunterImg;
var gameOverImg, restartImg;

var lionCG, tigerCG, hunterCG;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance = 0;
var gameOver, restart;

function preload(){
//Loading all the necessary animations and images.
    pathImg = loadImage("Road.png");
    gazelleAnimation = loadAnimation("gazellestanding.png","gazellerunning.png");
    gazelleCollided = loadAnimation("gazelledead.png");

    badguyLionImg = loadImage("badguy-lion.png");
    badguyTigerImg = loadImage("badguy-tiger.png");
    badguyHunterImg = loadImage("badguy-hunter.png");

    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");

}

function setup(){
    background("white")
//Creating the overall screen.
    createCanvas(windowWidth,320);
//Creating the moving road.
    path=createSprite(windowWidth,320);
    path.addImage(pathImg);
    path.velocityX = 5;

//Creating the runaway gazzele.
    gazelle = createSprite(windowWidth/3,160,50,50);
    gazelle.addAnimation("gazel",gazelleAnimation);
    gazelle.scale=0.75;

//Setting the collider for the gazelle.
    gazelle.setCollider("rectangle",0,0,40,40);

//Creating the gameover image
    gameOver = createSprite(windowWidth/3,160,50,50);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.8;
    gameOver.visible = false;

//Creating the restart button
    

}

function draw(){
    drawSprites();
}