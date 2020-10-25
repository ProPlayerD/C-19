var ball,ballImg,paddle,paddleImg;

var backgroundImg

var gameState = "pause";

var score = 0;

var invis

function preload() {
  paddleImg = loadImage("paddle.png");
  
  ballImg = loadImage("ball.png");
  
  backgroundImg = loadImage("unnamed (1).jpg")
}
function setup() {
  createCanvas(400, 400);
   // create the Ball Sprite and the Paddle Sprite
  
   background = createSprite(170,200,400,400);
   background.addImage(backgroundImg);
   background.scale = 1.1;
  
   paddle = createSprite(375,200,20,20)
   paddle.addImage(paddleImg);
   paddle.scale = 0.9;
  
   ball = createSprite(25,200,20,20);
   ball.addImage(ballImg);
   ball.scale = 0.75;
   //ball.debug = true;
  
  invis = createSprite(375,200,13,80);
  invis.visible = false;

}

function draw() {
  
  drawSprites();
 edges =  createEdgeSprites();
  
  invis.x = paddle.x;
  invis.y = paddle.y;
  
  
  //bounce the ball
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(invis);
  
  if(ball.isTouching(paddle)){
    score = score +1;
  }
 
  paddle.collide(edges);
  
  if(gameState === "pause"){
    fill("blue")
    text("Press space to begin",150,200)
    text("use arrows to move",150,220);
     
     }
  
  fill("red");
  textSize(20);
  text(score,200,20);
  
  
  
  if(keyDown("space")&&gameState === "pause"){
    ball.velocityY = 3;
    ball.velocityX = 9;
    
    gameState = "play";
    
 }
  
  if(gameState === "play"){
    
    //paddle.y = mouseY;
    
    if(keyDown(UP_ARROW))
  {
     paddle.y  = paddle.y - 10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y  = paddle.y + 10;
  
   }
    
    
  
    
  }
    
  
}
