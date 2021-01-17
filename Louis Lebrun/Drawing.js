let gui;
let controls;
let angle;
let symmetry;

function Settings() {
  this.clear = function() {
    background(0);
    create.Canvas(200,500);
  }
  this.save = function() {
    save('Art.jpg');
  }
  this.symmetry = 6;
  this.color = '#ffffff';
  this.penWeight = 1;
}


function createControls() {
  controls = new Settings();
  gui = new dat.GUI({name: 'Controls'});
  gui.add(controls, 'symmetry', 1, 40, 1);
  gui.addColor(controls, 'color');
  gui.add(controls, 'penWeight', 1, 10);
  gui.add(controls, 'clear');
  gui.add(controls, 'save');
}

function setup() {
  createControls();
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
  translate(width / 2, height / 2);
}

function draw() {
  translate(width / 2, height / 2);
  if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    symmetry = controls.symmetry;
    angle = 360 / symmetry;
    const mx = mouseX - width / 2;
    const my = mouseY - height / 2;
    const pmx = pmouseX - width / 2;
    const pmy = pmouseY - height / 2;
    for (let i = 0; i < symmetry; i++) {
      rotate(angle);
      stroke(controls.color);
      strokeWeight(controls.penWeight);
      line(mx, my, pmx, pmy);
      push();
      scale(-1, 1);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
}