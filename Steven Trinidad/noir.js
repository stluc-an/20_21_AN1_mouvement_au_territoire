let blocss =[];
let blocss2 = [];
let col = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (var i = 0; i < 150; i++) {
  	let w = random(-width, width);
  	let h = random(-height, height);
  	let z = -1000;
  	blocss[i] = new Blocss(w, h, z);
  	let a = random(-width, width);
  	let b = random(-height, height);
  	let c = -1000;
  	blocss2[i] = new Blocss2(a, b, c);
  }
}

function draw() {
  // put drawing code here
  background(col);

  for(let i = 0; i < (blocss.length, blocss2.length); i++) {
  	blocss[i].moveForward();
  	blocss[i].show();
  	blocss2[i].moveForward2();
  	blocss2[i].show2();
  }

  col = map(mouseX, 0, width + 5000, 0, 255);
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
		box(50, col);
	}

}

class Blocss2 {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	moveForward2() {
		this.c = this.c + 1;

		if (this.c > 800) {
      		this.c = -800;
    		}
	}

	show2() {

		translate(this.a/2 ,this.b/2 ,this.c);
		fill(255, map(this.c, -1000, 500, 0, 255));
		stroke(0, map(this.c, -1000, 500, 0, 255));
		rotateX(millis() / 1536);
		rotateY(millis() / 546);
		box(100);
	}

}