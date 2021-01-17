
let lineArray = [];
let orderOfRotation;
let xoff = 0;
let hu = xoff * 255;
let song;   
let angle;
let gui;
let controls;
let executed = false;

function Settings() {
  this.symmetry = 6;
  this.color = '#ffffff';
  this.penWeight = 1;
this.burstMode = false;
}

/*
if(!executed){
    alert("Hello! I am an alert box!!");

    executed = true;
}
*/

function createControls() {
  controls = new Settings();
  gui = new dat.GUI({name: 'Controls'});
  gui.add(controls, 'symmetry', 1, 40, 1);
  //gui.addColor(controls, 'color');
  gui.add(controls, 'penWeight', 1, 10);
    gui.add(controls, 'burstMode', 0, 1);
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  stroke(256);
  strokeWeight(2);
 noFill();
  //orderSlider = createSlider(6, 60, 2)
  //weightSlider = createSlider(0.5,10,1);
    
    //style initialisation
    
    createControls();
//  song = loadSound("trance-prog-indienne");


function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

}

function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}
function draw() {
  
 strokeSlider = strokeWeight(controls.penWeight);
  orderOfRotation = controls.symmetry;
  background(0);
  translate(width / 2, height / 2);
  rotate(angle);
  angle+=0.1
  for (let order = 0; order < orderOfRotation; order++) {
    for (let i = 0; i < lineArray.length; i++) {
      beginShape();
      for (let j = 0; j < lineArray[i].length; j++) {
        vertex(lineArray[i][j][0], lineArray[i][j][1]);
      }
      endShape();
    }
    for (let i = 0; i < lineArray.length; i++) {
      beginShape();
      for (let j = 0; j < lineArray[i].length; j++) {
        vertex(lineArray[i][j][0], lineArray[i][j][1] * -1);
      }
      endShape();
    }
    rotate(360 / orderOfRotation);
  }
  for (let i = lineArray.length - 1; i >= 0; i--) {
    for (let j = lineArray[i].length - 1; j >= 0; j--) {
      lineArray[i][j][0] += 2;
      if (lineArray[i][j][0] > 450) {
        lineArray[i].splice(j, 1);
      }
    }
    if (lineArray[i].length < 1) {
      lineArray.splice(i, 1);
    }
  }
  let hu = map(sin(xoff), -1,1,0,255);
if(controls.burstMode){
    xoff += random(0,5000);
}
    else{xoff += random(0,1);}
  
  colorMode (HSB,255,2,2,0);
  stroke(hu, 256, 1, 1); 
}

function mousePressed() {
  lineArray.push([
    [mouseX - width / 110, mouseY - height / 2]
  ]);
}

function mouseDragged() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    lineArray[lineArray.length - 1].push([mouseX - width / 2, mouseY - height / 2]);

  }
  function mouseWheel(event) {
  if(weightSlider += event.delta/100 > 0)
  weightSlider += event.delta / 100;
}
}