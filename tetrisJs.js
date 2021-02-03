let mainFr = document.getElementById("mainFrame");
let button = document.getElementById("startButton");
let isStarted = 0;

setInterval(function(){
	if(window.innerWidth > 420) {
		mainFr.style.left = window.innerWidth / 2 - 205 + "px";
		button.style.left = window.innerWidth / 2 - 107 + "px";

}
}, 5);

let fastSpeed = 50;
let slowSpeed = 130;


let cells = [];

for(let i = 0; i < 128; i++){
	cells[i] = document.createElement("div");
	cells[i].id = "c" + i;
	cells[i].style.border = "solid 1px black";
	mainFr.append(cells[i]);
}

let fallSpeed = 120;
let N = 4;
let isSmthPressed = 0;

document.addEventListener('keydown', function(event) {



switch(event.code){

case "KeyS": fallSpeed = fastSpeed;
break;
case "KeyA": 

if(N % 8 > 0 && !isSmthPressed) N--;
isSmthPressed = 1;
break;
case "KeyD": 
;
if(N % 8 < 7 && !isSmthPressed) N++;
isSmthPressed = 1
break;
case "KeyW":
break;

}


}
)
document.addEventListener('keyup', function(event) {
isSmthPressed = 0;
if(event.code == "KeyS") fallSpeed = slowSpeed;


}
)

let currentFigure = document.createElement("div");
currentFigure.id = "curFig";


let I = 0;

function gameTick(){



cells[N].append(currentFigure);
if(N < 120 && I % 3 == 0){
	N += 8;
} else if(N >= 120) {
	
}

I++;
	setTimeout(gameTick, fallSpeed);
}

button.onclick = function(){
if(isStarted == 0){
isStarted = 1;
mainFr.style.opacity = 1;
button.style.opacity = 0;
button.style.left = "-500px";
setTimeout(gameTick, 1300);
}
}

