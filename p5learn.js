"use strict"

var strokeW = 3;
$(document).ready(function()
{


  document.getElementById('resetButton').addEventListener("click", clickReset);
  document.getElementById('plus').addEventListener("click",clickPlus);
  document.getElementById('minus').addEventListener("click",clickMinus);

});

function clickPlus()
{
  strokeW = min(strokeW+1,12);
  strokeWeight(strokeW);
}

function clickMinus()
{
  strokeW = max(strokeW-1,1);
  strokeWeight(strokeW);
}


function clickReset()
{
  alert ("Hey! Are you sure?");
  background(0,0,100);
  strokeW = 1;
  strokeWeight(strokeW);
}

function setup(){
  let myCanvas = createCanvas (windowWidth-100,windowHeight - 200);
  myCanvas.parent("p5Canvas");
  //createCanvas(600,400);
  background(0,0,100);
  strokeWeight(strokeW);
}

function draw(){
  if (mouseIsPressed){
    //point (mouseX,mouseY);
    //point(mouseX, height- mouseY);
    line (mouseX, mouseY, pmouseX, pmouseY);
    line (mouseX, height - mouseY, pmouseX, height - pmouseY);
  }

}
