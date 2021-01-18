let x = 40;
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

}

function drawPlayer(){  
    fill(255);
    stroke(255);
    push();
    x = x + 1 
    translate(x,450);
    ellipse(0,0,10,10);
    line(0,10,0,30);
    line(0,10,5,20);
    line(0,10,-5,20);
    line(0,30,5,50);
    line(0,30,-5,50);
    pop();  
}