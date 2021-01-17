let osc,playing, freq, amp;

function setup() {
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('triangle');
  delay = new p5.Delay();
  delay.process(osc, 0.12, .7, 2300);
   reverb = new p5.Reverb();
  reverb.process(osc, 2, 0.1);

  reverb.amp(0); 
  fft = new p5.FFT();
  fft.setInput (osc);
          masterVolume(0.2)

}

function draw() {
  background(13,5,0);
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
    
  if (playing) {
    osc.freq(freq, 0.2);
    osc.amp(amp, 0.2);
  }
     let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(194,74,0);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}

function playOscillator() {
  osc.start()
  playing = true;
}

function mouseReleased() {
  osc.amp(0, 0.5);
  playing = false;

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight); 
}
}