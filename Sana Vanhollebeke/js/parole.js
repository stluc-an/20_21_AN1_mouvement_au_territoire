let words = [];
let wordFall = setInterval(makeWord, 100);
let letters = ['b', 'l', 'a']

function setup() {
  createCanvas(1920, 1080);
  textFont('courier new', 30);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255);
  text('this is an enigma. 1..2..3 find the words', width/2, height - 150);
  for (var i = words.length - 1; i >= 0; i--) {
    words[i].display();
    words[i].move();

    if (words[i].isOffScreen()) {
      words.splice(i, 1);
    }
  }

  if ((keyIsPressed == true) && (key == '1')) {
    fill(255);
    text('parler pour', 150, 400);
  }
  
  if ((keyIsPressed == true) && (key == '2')) {
    fill(255);
    text('ne rien', 220, 400);
  
  }
  
  if ((keyIsPressed == true) && (key == '3')) {
    fill(255);
    text('dire', 260, 400);
  }
  
}

function makeWord() {
  words.push(new Word());
  console.log(words.length);
}

class Word {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.speed = 2;
    this.l = random(letters);
    this.color = color(225);
  }

  move() {
    this.y += this.speed;
  }
  display() {

    fill(this.color);
    text(this.l, this.x, this.y);
  }
  // deletes letters offscreen
  isOffScreen() {
    if (this.y > height) {
      return true
    }
  }
}
//removes typed letters
function keyPressed() {
  removeLetter(key); 
}

function removeLetter(letter) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].l === letter) {
      print(words[i].l);
      words.splice(i, 1);
      i--; //needed to keep looping array correctly
    }
  }
}
    
