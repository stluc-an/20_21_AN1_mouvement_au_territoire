let size = 500;
let i = 0;
let e = 250;
let f = 2;


function setup() {
createCanvas(window.innerWidth, window.innerHeight);
background(0);
}

function draw() {

    ;
    
    stroke(255)  
    push();
    translate(0, 0);
    line(i, 0, size, size);
    size = size + 1;
    i = i + 10;
    pop();
    
    stroke(255,0,0);  
    push();
    translate(0, 400);
    line(0, 0, size, e);
    size = size + 1;
    e = e - 20;

    pop();

}
    
    /*stroke(0);  
    push();
   translate (600,0);
    line(0,f,300,0);
    f = f + 20 ;
    pop();*/
    
