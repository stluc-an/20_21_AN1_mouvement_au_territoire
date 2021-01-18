var drop = []
let bg;
let x = 100;


function setup() {
   bg = loadImage('deux.GIF');
  createCanvas(windowWidth, 645);
  for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
}
}

function draw()


 {
   background(bg);
 for(var i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update();


}
 translate(x, 0);
rect(0,619,28,28)
x = x + 8;

translate(x, 3);
rect(0,619,48,38)
x = x + 7;

translate(x, 5);
rect(0,619,28,28)
x = x + 4;

translate(x, 8);
rect(0,619,28,28)
x = x + 2;

translate(x, 12);
rect(0,619,28,28)
x = x + 1;
}




function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(0,250);
    ellipse(this.x, this.y, random(2, 7), random(10, 7));   
  }
  this.update = function() {
    this.speed = random(9, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}