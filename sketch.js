var canvas, backgroundImage;

var gameState = 0;
var runnerCount;
var allrunners;
var distance = 0;
var database;

var form, runner, game;

var runners, runner, runner2, runner3, runner4;

var track, runner1_img, runner2_img, runner3_img, runner4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  runner1_img = loadImage("../images/runner.png");
  runner2_img = loadImage("../images/runner2.gif");
  runner3_img = loadImage("../images/runner3.png");
  runner4_img = loadImage("../images/runner4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(runnerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
