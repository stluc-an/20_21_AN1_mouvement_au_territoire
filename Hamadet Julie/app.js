function docReady(fn){
	if(document.readyState === "complete" || document.readyState === "interactive"){
		setTimeout(fn, 1);
	}else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}



function onLoaded(){
	console.log("yo");
	setTimeout(function(){
		window.scrollTo(6633, 0); // values are x,y-offset	
	}, 200);
	
	window.scrollTo(6633, 0); // values are x,y-offset	
}

// Je recupere mes element par leur identifiant
// je les assignes dans des variables

const SectionOne = document.getElementById("s1");
const SectionTwo = document.getElementById("s2");
const SectionThree = document.getElementById("s3");
const SectionFour = document.getElementById("s4");

const button_un = document.getElementById("motlune_img");
const button_deux = document.getElementById("motsommeil_img");
const button_trois = document.getElementById("motbulle_img");
const button_quatre = document.getElementById("motfleur_img");
const buttonFinal = document.getElementById("btnfinal");

var music = new Audio('./assets/music/soldiers.mp3');

var declencheur = 0;

// je defini des fonctions pour mes click
function showSectionOne () {
	music.play();
	SectionOne.classList.remove("dn")
	declencheur += 1;
	showButtonFinal()
}

function showSectionTwo () {
	music.play();
	SectionTwo.classList.remove("dn")
	declencheur += 1;
	showButtonFinal()
}

function showSectionThree () {
	music.play();
	SectionThree.classList.remove("dn")
	declencheur += 1;
	showButtonFinal()
}

function showSectionFour () {
	music.play();
	SectionFour.classList.remove("dn")
	declencheur += 1;
	showButtonFinal()
}

function showButtonFinal () {
	if (declencheur == 4) {
		buttonFinal.classList.remove("dn")
		document.getElementById("home").classList.add("blackandwhite")
	}
};

// Je dit au JS d'ecouter les clicks sur x ou y element
/*button_one.addEventListener("click", showIndOne)*/
button_un.addEventListener("click", showSectionOne);
button_deux.addEventListener("click", showSectionTwo);
button_trois.addEventListener("click", showSectionThree);
button_quatre.addEventListener("click", showSectionFour);



docReady(onLoaded);