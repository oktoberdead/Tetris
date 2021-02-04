const fieldHeight = 20;
const fieldWidth = 10;
let cellSize;
if(window.innerWidth < window.innerHeight) cellSize = window.innerWidth / (fieldWidth + innerWidth/30);
else if(window.innerWidth > window.innerHeight) cellSize = window.innerHeight / (fieldHeight + innerHeight/200);

//20 = 122; 10 = 112; 30 = 132
let mainFr = document.getElementById("mainFrame");
let button = document.getElementById("startButton");
let link = document.getElementById("lnk");

let isStarted = 0;

let type;
let figure = [0];
let figurePos = [0];

let isGameOver = 0;
let fastSpeed = 35;
let slowSpeed = 130;

let figRed, figGreen, figBlue, figAlpha;

let cells = [];
let isOccupied = [0]

let I = 0;

let fallSpeed = slowSpeed;
let N = Math.floor(fieldWidth / 2);
let isSmthPressed = 0;
let numberOfFigures = 0;



link.style.top = fieldHeight * cellSize + 50 + "px";

mainFr.style.gridTemplateColumns = "repeat(" + fieldWidth + ", " + cellSize + "px)";
mainFr.style.gridTemplateRows = "repeat(" + fieldHeight + ", " + cellSize + "px)";

mainFr.style.height = fieldHeight * cellSize + "px";
mainFr.style.width = fieldWidth * cellSize + "px";

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Rcolor() {
	figRed = rand(50, 200);
	figBlue = rand(50, 200);
	figGreen = rand(50, 200);
	figAlpha = rand(50, 100);
	
}




let currentFigure = document.createElement("div");
	currentFigure.id = "curFig";
	Rcolor();
	currentFigure.style.background = "rgba("+figRed+","+figGreen+","+figBlue+","+figAlpha/100+")"; 
	currentFigure.style.height = cellSize - 2 + "px";
	currentFigure.style.width = cellSize - 2 + "px";









	window.onresize = function sizeControl(event){
		
			mainFr.style.left = window.innerWidth / 2 - (cellSize+2)*Math.floor(fieldWidth / 2) + "px"; 
			button.style.left = window.innerWidth / 2 - 102 - fieldWidth + "px";
			link.style.left = window.innerWidth / 2 - 202 - fieldWidth + "px";
}
if(window.innerWidth > fieldWidth * (cellSize+2)) {
			mainFr.style.left = window.innerWidth / 2 - (cellSize+2)*Math.floor(fieldWidth / 2) + "px"; 
			button.style.left = window.innerWidth / 2 - 102 - fieldWidth + "px";
			link.style.left = window.innerWidth / 2 - 202 - fieldWidth + "px";
		}
















function T_shape() {
	
	for(let i = 0; i < 3; i++){
		figure[i] = document.createElement("div");
		figure[i].id = "figBlock" + i;
		Rcolor();
		figure[i].style.background = "rgba("+figRed+","+figGreen+","+figBlue+","+figAlpha/100+")"; 

	}

}


function Z_shape(type) {
	
}

function L_shape() {
	
}

function I_shape() {
	
}

function Square_shape() {
	
}




function spawnFigure(){
	switch(rand(1, 6)){

case 1:
T_shape();
break;



case 2:
Square_shape();
break;



case 3:
L_shape();
break;



case 4:
I_shape();
break;



case 5:
Z_shape(1);
break;



case 6:
Z_shape(2);
break;

	}
}








for(let i = 0; i < fieldWidth*fieldHeight; i++){
	cells[i] = document.createElement("div");
	cells[i].id = "c" + i;
	cells[i].style.border = "solid 1px black";
	mainFr.append(cells[i]);
}


document.addEventListener('keydown', function(event) {



switch(event.code){

case "KeyS": fallSpeed = fastSpeed;
break;
case "KeyA": 

if(N % fieldWidth > 0 && !isSmthPressed && !isOccupied[N-1]) N--;
isSmthPressed = 1;
break;
case "KeyD": 

if(N % fieldWidth < fieldWidth-1 && !isSmthPressed && !isOccupied[N+1]) N++;
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


function gameTick(){



cells[N].append(currentFigure);
if(N < fieldWidth*fieldHeight - fieldWidth && I % 3 == 0){
	N += fieldWidth;
} else if(N >= fieldWidth*fieldHeight - fieldWidth || isOccupied[N+fieldWidth] == 1) {
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

	if(N > fieldWidth - 1){
	currentFigure.id = "block" + numberOfFigures;
	currentFigure.style.background = "rgba("+figRed+","+figGreen+","+figBlue+","+figAlpha/100+")"; 
	currentFigure.style.height = cellSize - 2 + "px"; 
	currentFigure.style.width = cellSize - 2 + "px";
	currentFigure = document.createElement("div");
	currentFigure.id = "curFig";
	isOccupied[N] = 1;
	Rcolor();
	currentFigure.style.background = "rgba("+figRed+","+figGreen+","+figBlue+","+figAlpha/100+")"; 
	currentFigure.style.height = cellSize - 2 + "px"; 
	currentFigure.style.width = cellSize - 2 + "px";
	N = Math.floor(fieldWidth / 2);
	numberOfFigures++;
}
else {
	alert("Game over.");
	isGameOver = 1;
}


}
