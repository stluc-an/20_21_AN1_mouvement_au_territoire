let blocss =[];


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

	for (var i = 0; i < 150; i++) {
  		let w = random(-width, width);
  		let h = random(-height, height);
  		let z = -1000;
  		blocss[i] = new Blocss(w, h, z);
  }

}

function draw() {
	background(200);

  	for(let i = 0; i < blocss.length; i++) {
  		blocss[i].moveForward();
  		blocss[i].show();
  }

}

class Blocss {
	constructor(w, h, z) {
		this.width = w;
		this.height = h;
		this.deep = z;
	}

	moveForward() {
		this.deep = this.deep + 0.950;

		if (this.deep > 800) {
      		this.deep = -1000;
    		}
	}
	show() {

		translate(this.width/2 ,this.height/2 ,this.deep);
		fill(255, map(this.deep, -1000, 500, 0, 255));
		stroke(0, map(this.deep, -1000, 500, 0, 255));
		box(50, mouseX/2, mouseY/2);
	}
}


