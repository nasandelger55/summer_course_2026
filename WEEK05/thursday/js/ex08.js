let isPressed = false;
let circleSize = 100;
let circleColor = "#3498db";

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(220);

  if (isPressed == true) {
    circleSize = 200;
    circleColor = "#e74c3c";
  } else {
    circleSize = 100;
    circleColor = "#3498db";
  }

  fill(circleColor);
  circle(width / 2, height / 2, circleSize);
}

function mousePressed() {
  isPressed = true;
}

function mouseReleased() {
  isPressed = false;
}