let monBouton;
let size = 10;
let sizeDest;
let speed = 3;
let xoff = 0;
let animSpeed = 0.01;
let nEllipse = 500;
///let etoiles;///
///let count = 0;///
let zoom = 0;
let zoomDest = 0;
let lastZoom = 3;

let nextPage = "page2.html";


/////// ADD BY VINCE
let flag = false;
/////// ADD BY VINCE

function setup() {

	ellipseMode(CENTER);

	createCanvas(window.innerWidth, window.innerHeight);
	sizeDest = sqrt(width * width + height * height);
	///etoiles = selectAll(".etoile");
}


function boutonClickAction(){
	sizeDest = random(10, 1000);
}

function mousePressed(){
	zoomDest  = zoomDest +1;
}

function draw() {
	background(255);
	xoff = xoff + animSpeed;
	let color = false;
	translate(width/2, height/2);
	scale(1 + zoom);
	translate(-width/2, -height/2);

	for( let i = 0 ; i < nEllipse ; i = i + 1){
		push();
		translate(width/2, height/2);
		let s = size - size * i / nEllipse;
		let m = s * 0.1;
		//rotate(i + (size/100));
		let x = noise(0, i, xoff) * m - m/2;
		let y = noise(1, i, xoff) * m - m/2; 
		translate(x, y);
		if(color == false){
			fill(102, 0, 41);
			stroke(255, 0, 102);
		}else{
			fill(179, 0, 71);
			stroke(255, 102, 153);
		}
		color = !color;

		ellipse(0, 0, s)
		pop();


	}


	size = size + (sizeDest - size) * 0.05;///
	zoom = zoom + (zoomDest - zoom) * 0.05;///



	if(zoom > lastZoom - 2 && !flag ){
		location = nextPage;
		flag = true;
	}
	///count = count +1;

	///if(count == 100){
		///etoiles[0].elt.style.opacity = 0 ///etoile	}
	

}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}
