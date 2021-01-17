

let head;
let chest;
let legs;
let dict = ["base", "black", "pink", "white", "black"];

function setup(){
	head = select("#head");
	chest = select("#chest");
	legs = select("#legs");

	head.mouseClicked(next);
	chest.mouseClicked(next);
	legs.mouseClicked(next);
	
}

function next(param){
	let src = param.target.src;
	for(let i = 0 ; i < 4 ; i++){
		if(src.includes(dict[i])){
			src = src.replace(dict[i], dict[i+1]);

			break;
		}
	}
	param.target.src = src;

	if(
		document.querySelectorAll("[src*=black]").length == 3 ||
		document.querySelectorAll("[src*=pink]").length == 3 ||
		document.querySelectorAll("[src*=white]").length == 3
	){
		document.body.classList.add("complete");
	}else{

		document.body.classList.remove("complete");
	}
}

