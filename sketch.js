//Create variables here
var pImg;
var walking1Img;

function preload()
{
  //load images here
  pImg = loadImage("images/thunderbolt/2.png")
  walking1Img = loadImage("images/Walking Frame/walking_1.png")
}

function setup() {
  createCanvas(300, 400);
  background(176,40,148);
 
}


function draw() {  

  

imageMode(CENTER);
  image(pImg, 160, 100, 150, 150);

  imageMode(CENTER);
  image(walking1Img, 160, 300, 250, 250);

  
  drawSprites();
  //add styles here

}



