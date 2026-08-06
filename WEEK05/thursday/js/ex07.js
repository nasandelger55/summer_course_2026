let circleX = 300;
let circleY = 200;
let circleColor = "#3498db";
let circleSize = 90;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(220);

  fill(circleColor);
  circle(circleX, circleY, circleSize);
}

function mousePressed() {
  circleX = mouseX;
  circleY = mouseY;

  if (mouseX < width / 2) {
    circleColor = "#3498db"; 
  } else {
    circleColor = "#f39c12"; 
  }
}