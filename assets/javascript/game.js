// random number is generated for the player to match
var number = Math.floor(Math.random() * 121) + 19;
// this function displays the random number to the browser
function newNumber() {
	$("#randomNumber").text(number);
}
//game function is called to start the game
game();
//info function checks the total score and updates 
// the browser for wins and losses, then runs the game start function
function info(){
	if (score === number) {
		wins++;
		$("#wins").text("Wins: " + wins);
		number = Math.floor(Math.random() * 121) + 19;
		// $("#randomNumber").text(number);
		score = 0;
		// $("#score").text(score);
		game();
	}
	else if (score > number) {
		losses++;
		$("#losses").text("Losses: " + losses);
		number = Math.floor(Math.random() * 121) + 19;
		// $("#randomNumber").text(number);
		score = 0;
		// $("#score").text(score);
		game();
		}
}

//variable for the score, wins, losses, and icons.
var score = 0;
var wins = 0;
var losses = 0;
var iconOne = Math.floor(Math.random() * 3) + 1;
var iconTwo = Math.floor(Math.random() * 3) + 4;
var iconThree = Math.floor(Math.random() * 3) + 7;
var iconFour = Math.floor(Math.random() * 3) + 10;
//function for game play
function game() {
	//displays new number to the browser
	newNumber();
	//sets the score to 0
	score = 0;
	//displays the 0 score to the browser
	$("#score").text(score);
//assigns a random value to the images on the web page
//listens for the image to be clicked
//adds the value assigned to the image to the score
//runs info function to check the score for a win or loss
$("#img1").on("click", function() {
	iconOne = parseInt(iconOne);
	score += iconOne;
	$("#score").text(score);
	info();
	})
//assigns a random value to the images on the web page
//listens for the image to be clicked
//adds the value assigned to the image to the score
//runs info function to check the score for a win or loss
$("#img2").on("click", function() {
	iconTwo = parseInt(iconTwo);
	score += iconTwo;
	$("#score").text(score);
	info();
})
//assigns a random value to the images on the web page
//listens for the image to be clicked
//adds the value assigned to the image to the score
//runs info function to check the score for a win or loss
$("#img3").on("click", function() {
	iconThree = parseInt(iconThree);
	score += iconThree;
	$("#score").text(score);
	info();
})
//assigns a random value to the images on the web page
//listens for the image to be clicked
//adds the value assigned to the image to the score
//runs info function to check the score for a win or loss
$("#img4").on("click", function() {
	iconFour = parseInt(iconFour);
	score += iconFour;
	$("#score").text(score);
	info();
})
}
