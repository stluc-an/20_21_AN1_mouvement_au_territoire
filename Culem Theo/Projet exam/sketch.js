let monBouton;
let imgPath = "image/FinalTrump.jpg";
let img;
let imgPathBid = "image/FinalJoeBiden.jpg";
let imgBid;
let clickcount = 0;
let x = 0;
let y = 100;
let w = 600;
let h = 800;
function preload(){
	img = loadImage(imgPath);

	imgBid = loadImage(imgPathBid);
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	monBouton = select("#TheBeast");
 	monBouton.mouseClicked(boutonClickAction);
 	monBouton.size(window.innerWidth, window.innerHeight);

}
function boutonClickAction(){
	clickcount = clickcount + 1;
}

function draw() {
	background(70, 70, 70);
	//image(img, 0, 0,600 ,600);

	if(clickcount >= 15){
		monBouton.remove();
	}

	/*if(	mouseX > x &&
		mouseX < x + w &&
		mouseY > y &&
		mouseY < y + h &&
		mouseIsPressed
	){
		x = mouseX - w /2;
		y = mouseY - h /2;
	}*/
	


	let isDragging = false;


	if(mouseX > x){
		if(mouseX < x + w){
			if(mouseY > y){
				if(mouseY < y + h){
					if(mouseIsPressed){
						x = mouseX - w /2;
						y = mouseY - h /2;
						isDragging = true;
					}
				}			
			}
		}
	}


	if(isDragging){
		if(mouseX > 1080){
			if(mouseX < 1880){
				if(mouseY > 0){
					if(mouseY < 1200){

						location = "page7.html"

					}
				}
			}
		}
	}

	image(imgBid, 1080,  0, 800, 1200);

	image(img,x, y, w, h);
	


}