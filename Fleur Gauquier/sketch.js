
let drawers = [];
let r = 0.3;
let l = 1250;
let x = 40;
let y = 250;
let k = x + 1;
let playerPos;
let size=300
let circleMask;
let imgEn1;
let imgEn2;
let imgEn3;
let imgEn4;
let imgEn5;
let imgEn6;
let xe = 1000;
let xeII = 1200;
let xeIII = 1300;
let xeIV = 1100;
let xeV = 1400;
let xeVI = 1500;
let e = 1300;

function preload() {
    imgEn1 = loadImage('ennemi1.PNG');
    imgEn2 = loadImage('ennemi2.PNG');
    imgEn3 = loadImage('ennemi3.PNG');
    imgEn4 = loadImage('ennemi4.PNG');
    imgEn5 = loadImage('ennemi5.PNG');
    imgEn6 = loadImage('ennemi6.PNG');
    
} 

function setup() {
    
createCanvas(window.innerWidth,window.innerHeight);
    
  circleMask = createGraphics(128, 128);
    circleMask.fill(0);
    circleMask.noStroke();
    circleMask.circle(64, 64, 128);
    
    drawers.push(drawA);
    drawers.push(drawB);
    drawers.push(drawC);
    drawers.push(drawD);
    drawers.push(drawE);
    drawers.push(drawF);
    drawers.push(drawG);
    drawers.push(drawH);
    drawers.push(drawI);
    drawers.push(drawJ);
    drawers.push(drawK);
    drawers.push(drawL);
    drawers.push(drawM);
    drawers.push(drawN);
    drawers.push(drawO);
    drawers.push(drawP);
    drawers.push(drawQ);
    drawers.push(drawR);
    drawers.push(drawS);
    drawers.push(drawT);
    drawers.push(drawU);
    drawers.push(drawV);
    drawers.push(drawW);
    drawers.push(drawX);
    drawers.push(drawY);
    drawers.push(drawZ);
    drawers.push(drawExclamationMark);
    drawers.push(drawQuestionMark);
    drawers.push(drawDot); 
    drawers.push(drawHat);
    drawers.push(drawComa);
    drawers.push(drawDash);

}

function drawExclamationMark(){
    if(distanceEn1 < 10 ){
        if(keyIsDown(UP_ARROW)){
            y = 200;
        }else{
            drawLooserBkg();
        }
    }
    push();
   image(imgEn1, xe , 250, 50, 50);
    xe = xe - 2;
    pop();
    
}
function drawQuestionMark(){
     let distanceEn2 = abs(x - xeII);
    
     if(distanceEn2 < 10 ){
        if(keyIsDown(UP_ARROW)){
            drawLooserBkg();
        }else{
            y=250;
        }
    }
    push();
   image(imgEn2, xeII , 200, 50, 50);
    xeII = xeII - 1;
    pop();
}
function drawDot(){
     let distanceEn3 = abs(x - xeIII);
    
     if(distanceEn3 < 10 ){
        if(keyIsDown(UP_ARROW)){
            y = 200;
        }else{
            drawLooserBkg();
        }
    }
    push();
   image(imgEn3, xeIII , 250, 50, 50);
    xeIII = xeIII - 0.5;
    pop();
}
function drawHat(){
    let distanceEn4 = abs(x - xeIV);
    
     if(distanceEn4 < 10 ){
        if(keyIsDown(UP_ARROW)){
            y = 200;
        }else{
            drawLooserBkg();
        }
     }
    push();
   image(imgEn4, xeIV , 250, 50, 50);
    xeIV = xeIV - 1.5;
    pop();
}
function drawComa(){
    let distanceEn5 = abs(x - xeV);
    
     if(distanceEn5 < 10 ){
        if(keyIsDown(UP_ARROW)){
            y = 200;
        }else{
            drawLooserBkg();
        }
    }
     push();
   image(imgEn5, xeV , 250, 50, 50);
    xeV = xeV - 1;
    pop();
}
function drawDash(){
     let distanceEn6 = abs(x - xeVI);
    
     if(distanceEn6 < 10 ){
        if(keyIsDown(UP_ARROW)){
            y = 200;
        }else{
            drawLooserBkg();
        }
    }
    push();
   image(imgEn6, xeVI , 250, 50, 50);
    xeVI = xeVI - 1.5;
    pop();
}

function drawMvnt(){
    if (keyIsDown(LEFT_ARROW)) {
    x = x - 2;
  } 
    if (keyIsDown(RIGHT_ARROW)) {
    x = x + 2;
  }
    if (keyIsDown(UP_ARROW)) {
        y = 200;
    } else {
        y = 250 ;
    }
    if (x < 0){
        x = 0;
    }
}

function animation(){
background(0);
x = 1250;
    location = "testFinalAnim.html";
}


function draw() {
    
    let params = new URLSearchParams(document.location.search.substring(1));
    let text = params.get("answertxt");
    background(255);
             
    let finalStep = abs(x - l);
    
    if (finalStep < 10){
     animation(); 
    }
    
    drawMvnt();
    drawPlayer();
    drawEnv();
    
   

    for(let i = 0; i < text.length ; i ++){
        let charCode = text.charCodeAt(i) -97 ;
        let char =text.charAt(i);
        let drawer = drawers[charCode];
        
        if(char == '!'){
            drawer = drawers[26];
        }
        if(char == '?'){
           drawer = drawers[27];
        }
        if(char == '.'){
           drawer = drawers[28];
        }
        if(char == '^'){
           drawer = drawers[29];
        }
        if(char == ','){
           drawer = drawers[30];
        }
        if(char == '-'){
           drawer = drawers[31];
        }
        
        
        if(drawer){
            drawer();    
        }
    }
}


function drawEnv(){
    fill(0);
    text("x : "+mouseX + " y :"+ mouseY, 0, 10);
    push();
    stroke(0);
    line(0,300,size,300);
    size = size + 4;
    line(l,300,l,225);
    pop();
   
} 

function reflect(x, y, w, h, r, mh, mv, mask){
    const piece = get(x, y, w, h);
    push();
    translate(x + w * 0.5, y + h * 0.5);
    rotate(r);
    scale(mh, mv)
    if(mask){
        piece.mask(mask);
    }
    image(piece, -w * 0.5, -h * 0.5, w, h);
    pop();
}
    
function windowResized() {
resizeCanvas(window.innerWidth,window.innerHeight);
}

function drawPlayer(){  
    fill(0);
    stroke(0);
    push();
    translate(x,y);
    ellipse(0,0,10,10);
    line(0,10,0,30);
    line(0,10,5,20);
    line(0,10,-5,20);
    line(0,30,5,50);
    line(0,30,-5,50);
    pop();  
}


function drawLooserBkg(){
   location = "looser.html";
}
function drawA(){
   reflect(100,270,100,50,0.5,1,1);
}
function drawB(){
    push();
    reflect(220,200,200,130,0.3,-1,1);
    stroke(0);
    noFill();
    rotate(0.3);
    rect(280,130,200,130);
    pop();  
}
function drawC(){
    push();
    noFill();
    stroke (0);
    translate(500,150);
    rotate(r);
    rect(0,0,160,160);
    r=r+0.01;
    pop();
}
function drawD(){
    push();
    noFill();
    stroke(0);
    triangle(630, 100, 658, 45, 886, 100);
    pop();
}
function drawE() {
    noFill();
    stroke(0);
    ellipse(920,250,140,250);  
    reflect(140, height- 300 - 105, 150, 150, millis()*0.001, 1, 1, circleMask);  
}
function drawF(){
    noFill();
    stroke(0);
    triangle(700, 250, 800, 350, 900, 250);
    
} 
function drawG(){
    noFill();
    stroke(0);
    quad(200,200,400,100,500,350,350,350);
}

function drawH(){
    noFill();
    stroke(0);
    quad(965,300,1010,125,1020,350,965,450);
}
function drawI(){
     noFill();
    stroke(0);
    triangle(650,350,450,450,700,550);
    reflect(900,150, 150, 150, millis()*0.001, 1, 1, circleMask);  
}
function drawJ() {
    noFill();
    ellipse(830,425, 50,50);
    line(800,500,850,350);
}
function drawK() {
    noFill();
    stroke(0);
    arc(720, 135, 170, 170, 0, HALF_PI);
}
function drawL(){
    noFill();
    stroke(0);
    arc(720, 450, 200, 220, 0, PI + HALF_PI);
}

function drawM(){
    noFill();
    stroke(0);
    triangle(50,350,110,340,80,400);
}
function drawN(){
    noFill();
    stroke(0);
    ellipse(90,90,50,50);
}
function drawO(){
    noFill();
    stroke(0);
    quad(1150,140,1100,90,1250,75,1250,175);
}
function drawP(){
    push();
    noFill();
    stroke(0);
    translate(140,500);
    rotate(PI);
    arc(0, 0, 125, 150, 0, PI);
    pop();
}
function drawQ(){
    push();
    noFill();
    stroke(0);
    translate(1170,512);
    rotate(PI/3);
    arc(0, 0, 150, 175, 0, PI);
    pop();
}
function drawR(){
    push();
    stroke(0);
    strokeWeight(10);
    point(230,130);
    point(565,245);
    point(325, 575);
    point(950,500);
    pop();
    reflect(500, height-300 - 105, 150, 150, millis()*0.001, 1, 1, circleMask);  

}
function drawS(){
    line(75,425,100,450);
    line(25,25,50,50);
    line(525,75,575,50);
    line(700,500,750,475);
    line(1275,375,1325,400);
    
}
function drawT(){
    stroke(0);
    noFill();
    rect(150,525,175,225);
}
function drawU(){
    push();
    stroke(0);
    noFill();
    translate(875,560);
    rotate(0.5);
    rect(0, 0, 65, 65, 20);
    pop();
}
function drawV(){
    noFill();
    stroke(0);
    triangle(480,525,530,555,505,600);
    line(475,575,550,525);
}
function drawW(){
    push();
    noFill();
    stroke(0);
    translate(1100,200);
    rotate(PI/2);
    arc(0, 0, 125, 100, 0, PI);
    arc(0, 0, 125, 75, 0, PI);
    pop();
}
function drawX(){
    push();
    stroke(0);
    noFill();
    translate(600,50);
    rotate(0.5);
    rect(0, 0, 65, 65, 20);
    pop();
}
function drawY(){
    push();
    stroke(0);
    noFill();
    translate(50,500);
    rotate(0.6);
    rect(0, 0, 65, 65, 20);
    pop(); 
    reflect(1050,450,200,130,millis()*0.001,-1,1);
}
function drawZ(){
    triangle(150,0,300,0,175,50);
}