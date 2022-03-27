var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let moveX = 7;
let moveY = 12;
let heroSize = 15;
let speedX = 3;
let speedY = 2;

function drawHero()  
  {

  requestAnimationFrame (drawHero);

ctx.fillStyle = "blue";
   ctx.fillRect(moveX, moveY, heroSize, heroSize);
 
  if (moveX >= 400)
  {
    speedX = -1;
  } 

 if (moveX <= 0)
  {
    speedX = 3;
  } 

 if (moveY >= 400)
  {
    speedY = -2;
  } 

 if (moveY <= 0)
  {
    speedY = 2;
  } 

 moveX += speedX;
 moveY += speedY;

 }

drawHero();
