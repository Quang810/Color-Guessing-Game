var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("pickedTitle");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyMode = document.querySelector('#easyMode');
var hardMode = document.querySelector('#hardMode');

colorDisplay.textContent = pickedColor;

gameStart();
function gameStart(){
	/loop through all 6 squares appear on the screen
    for(var i = 0; i < squares.length; i++){
        // add initial colors to squares
        squares[i].style.background = colors[i];
    
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked squares
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
		    //if clicked color matches picked color, announce the winning condition
                messageDisplay.textContent = "Correct!";
                resetButton.textContent ='Play Again?';
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
		    //if player chooses wrong, turn the clicked color into background color
                this.style.background = "#756D6D";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	//pick a random number, choose color matching the position of the number as picked color
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener('click', function () {
	//add event listener for reset button
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = 'New Colors';
    colors = generateRandomColors(numSquares);
    // if (easyMode.classList.contains('chooseMode')) {
    //     colors = generateRandomColors(3);
    // } else {
    //     colors = generateRandomColors(6);
    // }
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    gameStart();
})

easyMode.addEventListener('click', function () {
	//add event listener for easy button
    easyMode.classList.add('chooseMode');
    hardMode.classList.remove('chooseMode');

    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = 'New Colors';
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        // add initial colors to squares
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }

        
    }
    

})

hardMode.addEventListener('click', function () {
	//add event listener for hard button
    hardMode.classList.add('chooseMode');
    easyMode.classList.remove('chooseMode');

    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = 'New Colors';
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        // add initial colors to squares
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";

  
        
    }
    

})




