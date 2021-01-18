let arr = [];
let n = 64;
var pos = 0;


function preload(){
  zero   = loadSound('sounds/p0.mp3');
  one    = loadSound('sounds/p1.mp3');
  two    = loadSound('sounds/p2.mp3');
  three  = loadSound('sounds/p3.mp3');
  four   = loadSound('sounds/p4.mp3');
  five   = loadSound('sounds/p5.mp3');
  six    = loadSound('sounds/p6.mp3');
  seven  = loadSound('sounds/p7.mp3');
  eight  = loadSound('sounds/p8.mp3');
  nine   = loadSound('sounds/p9.mp3');
  //hardbass = loadSound('hardbass0.mp3');
}
function setup(){
  zero.loop();
  one.loop();
  one.loop();
  two.loop();
  three.loop();
  four.loop();
  five.loop();
  six.loop();
  seven.loop();
  eight.loop();
  nine.loop();

  // hardbass.loop();

  zero.stop();
  one.stop();
  two.stop();
  three.stop();
  four.stop();
  five.stop();
  six.stop();
  seven.stop();
  eight.stop();
  nine.stop();

  createCanvas(window.innerWidth, window.innerHeight);
  analyzer = new p5.Amplitude();
  
  fillArr(arr, 0);
}
function draw(){
  background(0);
  var dis = 10;
  translate(-25*6,150);
  for(var z = 0; z < 5; z++){
   var vol = analyzer.getLevel();
    if (pos >= n) pos = 0;
    arr[pos] = -vol * 690 * Math.random();
    pos++;
    stroke(255*(vol+0.69));
    fill(0);
    
    translate(25, height/dis);

    for (var i = 0; i < 3; i++){
    beginShape();
    for(var i = 0; i < arr.length; i++){
    var x = (width/ arr.length)*i*1.5;
    var y = arr[i];
    vertex(x, y);
    }
    endShape();
    }
    dis++;
  }
}

function nextAnalyzer(a){
if(a == 0){
  return analyzer0;
}else if(a == 1){
  return analyzer1;
}else if(a == 2){
  return analyzer2;
}else if(a == 3){
  return analyzer3;
}else if(a == 4){
  return analyzer4;
}else if(a == 5){
  return analyzer5;
}else if(a == 6){
  return analyzer6;
}else if(a == 7){
  return analyzer7;
}else if(a == 8){
  return analyzer8;
}else if(a == 9){
  return analyzer9;
}
}

function fillArr(a){
  for(var i = 0; i < n; i++){
    a.push(0);
  }
}


function keyPressed(){
  if(key == 1){
    zero.play();
    document.getElementById("one").style.color="darkgray";
  }
  else if(key == 2){
    one.play();
    document.getElementById("two").style.color="darkgray";
  }
  else if(key == 3){
    two.play();
    document.getElementById("three").style.color="darkgray";
  }
  else if(key == 4){
    three.play();
    document.getElementById("four").style.color="darkgray";
  }
  else if(key == 5){
    four.play();
    document.getElementById("five").style.color="darkgray";
  }
  else if(key == 6){
    five.play();
    document.getElementById("six").style.color="darkgray";
  }
  else if(key == 7){
    six.play();
    document.getElementById("seven").style.color="darkgray";
  }
  else if(key == 8){
    seven.play();
    document.getElementById("eight").style.color="darkgray";
  }
  else if(key == 9){
    eight.play();
    document.getElementById("nine").style.color="darkgray";
  }
  else if(key == 0){
    nine.play();
    document.getElementById("zero").style.color="darkgray";
  }
}