let x = 80;
let y = 800;


let a = 1700;
let b = 800;


let c= 1300;
let d= 710;


let w= 1500;
let q= 73;


let r= 700;
let s= 800;

let n= 200;
let o= 150;

let h= 850;
let j= 300;



function setup() {

    createCanvas(windowWidth, windowHeight);


 
  textSize(50);
  textAlign(10, 100)  
    
   
   
  background(225);
  noStroke;
    


}

function draw() {
;
clear()
    
    fill(0)
    rect(550,430, 800,150) 
 
   fill(225);
   text('Congrats! Youve made it to the end of your empty brain!!', 600, 500); 
   textSize (20);
   textFont('courier new')
    
    
    
    fill(0);
    noStroke();
    
    push()
    
    ellipse(x, y, 4, 4);
    x = x + random(-1,1);
    y = y + random(-1,1);
    
    pop()
            
    
    ellipse(a, b, 4, 4);
    a = a + random(-1,1);
    b = b + random(-1,1);
    
    push ()

    ellipse(c, d, 4, 4);
    c = c +  random (-1, 1);
    d = d + random (-1, 1);
    
    pop ()
    
    
    push()
    
    
   ellipse(w, q, 4, 4);
    w = w + random (-1, 1);
    q = q + random (-2, 2);
    
    pop()
    
    
    push()
    
    ellipse(r,s, 4, 4);
    r = r + random (-1, 1);
    s = s + random (-2, 2);
    
    pop()
    
    push()
    
    ellipse(n, o, 4, 4);
    n = n + random (-1, 1);
    o = o + random (-1, 1);
    
    
    ellipse(h, j, 4 , 4);
     h = h + random (-1, 1);
     j = j + random (-1, 1);
    
}


