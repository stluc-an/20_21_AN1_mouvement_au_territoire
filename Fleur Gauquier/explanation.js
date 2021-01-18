let x = 40;
let y = 450;
function setup() {
createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
background(0);
    push();
        stroke(255);
        strokeWeight(2);
        line(0,500,1300,500);
    pop();

    drawPlayer();
    drawMvnt();

}

function drawPlayer(){  
    fill(255);
    stroke(255);
    push();
    translate(x,y);
    ellipse(0,0,10,10);
    line(0,10,0,30);
    line(0,10,5,20);
    line(0,10,-5,20);
    line(0,30,5,50);
    line(0,30,-5,50);
    pop();  
}
function drawMvnt(){
    if (keyIsDown(LEFT_ARROW)) {
    x = x - 2;
  } 
    if (keyIsDown(RIGHT_ARROW)) {
    x = x + 2;
  }
    if (keyIsDown(UP_ARROW)) {
        y = 400;
    } else {
        y = 450 ;
    }
    if (x < 0){
        x = 0
    }
}