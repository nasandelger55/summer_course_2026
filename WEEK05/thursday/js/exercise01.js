let circleX;
let circleY;
let circleSize = 80;
let circleColor = "#3498db";
function setup() {
    createCanvas(600, 400)
    background("178, 251, 165")


}
function draw() {
    circleX = mouseX;
    circleY = mouseY;
    background("#f5f5f5")
   circleColor(circleX, circleY, circleSize)
   Fill(circleColor)
} 


    