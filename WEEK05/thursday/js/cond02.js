function setup() {
    createcanvas(600,400)
}
function draw() {
    if(mouseX > width / 2){
        background("#3498db");
 }else{
    background("#e74c3c");

 }
 Fill("#fff")
 circleColor(mouseX, mouseY, 30);



}