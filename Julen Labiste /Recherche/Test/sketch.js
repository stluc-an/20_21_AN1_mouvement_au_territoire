let monBouton; /// let = créer des variables
let size = 10;
let sizeDest = 10;
let speed = 3;

function setup() {
  monBouton = select("#btn");
  monBouton.mouseClicked(boutonClickAction);
  rectMode(CENTER);
  createCanvas(window.innerWidth, window.innerHeight);

}

function boutonClickAction(){
	sizeDest = random(10, 1000);
}


function draw() {
  background(255, 0, 0);

  let color = false;
  for( let i = 0 ; i < 10 ; i = i + 1 ){
  	push();
  	translate(width/2, height/2);
  	rotate(i + (size/100)); /// 0 10 45 90 360 degret/// 0 0.1 	2 * pI (6.28) les angle

  	if(color == false){
    	fill(0);
    	stroke(255);
  	}else{
    	fill(255);
    	stroke(0);
  	}
    color = !color;
    rect(0, 0, size / i, size / i);
    pop();
 }

 size = size + (sizeDest - size) * 0.05;

/*
  size = size + speed;
  if(size > 330){
  	speed = -speed;
  }
  if(size < 300){
  	speed = -speed;
  }


*/
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight)
}