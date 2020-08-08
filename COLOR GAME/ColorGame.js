var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
set();

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? numSquares = 3: numSquares = 6;
		set();
	});
}

resetButton.addEventListener("click", function(){set();});

checkSquares();

function checkSquares(){
	for(var i = 0; i < squares.length; i++){
	//set initial colors to squares
		squares[i].style.background = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			console.log(clickedColor, pickedColor);
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				setColor();
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try  Again";
			}
		});
	}
}

function set()
	{
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = "";
		h1.style.background = "steelblue";
		resetButton.textContent = "New Colors";
		for (var i = 0; i < squares.length; i++) {
			if(colors[i]){
				squares[i].style.background = colors[i];
				squares[i].style.display = "block";
			}
			else {
				squares[i].style.display = "none";
			}
		}
	}

function setColor()
	{
		for(var i = 0; i < squares.length; i++){
			squares[i].style.background = pickedColor;
		} 
		h1.style.background = pickedColor;
	}

function pickColor()
	{
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

function generateRandomColors(num)
	{
		var arr = [];

		for(var i = 0; i < num; i++){
			arr.push(randomColor());
		}

		return arr;
	}

function randomColor()
	{
		// get red from 0-255
		var r = Math.floor(Math.random() * 256);
		// get green from 0-255
		var g = Math.floor(Math.random() * 256);
		// get blue from 0-255
		var b = Math.floor(Math.random() * 256);
		return "rgb("+ r +", "+ g +", "+ b +")";
	}

//Math.random() - get random number
//Math.floor() - round up number to whole number