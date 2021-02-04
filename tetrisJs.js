let mainFr = document.getElementById("mainFrame");
let button = document.getElementById("startButton");
let isStarted = 0;

		mainFr.style.left = window.innerWidth / 2 - 205 + "px"; 
		button.style.left = window.innerWidth / 2 - 107 + "px";


function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}




window.onresize = function( event ) {
	if(window.innerWidth > 420) {
		mainFr.style.left = window.innerWidth / 2 - 205 + "px";
		button.style.left = window.innerWidth / 2 - 107 + "px";

}
};


let isGameOver = 0;
let fastSpeed = 30;
let slowSpeed = 130;


let figRed, figGreen, figBlue, figAlpha;


let cells = [];
let isOccupied = [0]

for(let i = 0; i < 128; i++){
	cells[i] = document.createElement("div");
	cells[i].id = "c" + i;
	cells[i].style.border = "solid 1px black";
	mainFr.append(cells[i]);
}

let fallSpeed = 120;
let N = 4;
let isSmthPressed = 0;
let numberOfFigures = 0;

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
	figRed = rand(0, 256);
	figBlue = rand(0, 256);
	figGreen = rand(0, 256);
	figAlpha = rand(0, 100);
	currentFigure.style.background = "rgba("+figRed+","+figGreen+","+figBlue+","+figAlpha/100+")"; 

let I = 0;

function gameTick(){



cells[N].append(currentFigure);
if(N < 120 && I % 3 == 0){
	N += 8;
} else if(N >= 120 || isOccupied[N+8] == 1) {
	freezeInPos();
}

I++;
	if(!isGameOver)
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

function freezeInPos(){

	if(N > 7){
	currentFigure.id = "block" + numberOfFigures;
	currentFigure.style.background = "rgba("+figRed+","+figGreen+","+figBlue+","+figAlpha/100+")"; 
	currentFigure.style.height = "48px"; 
	currentFigure.style.width = "48px";
	currentFigure = document.createElement("div");
	currentFigure.id = "curFig";
	isOccupied[N] = 1;
	figRed = rand(50, 200);
	figBlue = rand(50, 200);
	figGreen = rand(50, 200);
	figAlpha = rand(50, 100);
	currentFigure.style.background = "rgba("+figRed+","+figGreen+","+figBlue+","+figAlpha/100+")"; 
	N = 4;
	numberOfFigures++;
}
else {
	alert("Game over.");
	isGameOver = 1;
}


}
