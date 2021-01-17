let sound, amplitude;

function preload(){
  sound = setInput('musiques/Mutant.mp3')
}
function setup() {
  let cnv = createCanvas(100,100);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(220);
  text('tap to play', 20, 20);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
}

function toggleSound() {
  if (sound.isPlaying() ){
    sound.stop();
  } else {
    sound.play();
  }
}


function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}