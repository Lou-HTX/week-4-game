var iconOne = Math.floor(Math.random() * 3) + 1;
var iconTwo = Math.floor(Math.random() * 3) + 4;
var iconThree = Math.floor(Math.random() * 3) + 7;
var iconFour = Math.floor(Math.random() * 3) + 10;
var wins = 0;
var losses = 0;
var score = 0;
var number = Math.floor(Math.random() * 121) + 19;

console.log(iconOne);
console.log(iconTwo);
console.log(iconThree);
console.log(iconFour);

// selects a random number between 19 and 120, then displays it on the page
	
	$("#randomNumber").text(number);

	if (iconOne === iconTwo && iconOne === iconThree && iconOne === iconFour) {
		iconOne = Math.floor(Math.random() * 12) + 1;
	}
	else if (iconTwo === iconOne && iconTwo === iconThree && iconTwo === iconFour) {
		iconTwo = Math.floor(Math.random() * 12) + 1;
	}
	else if (iconThree === iconOne && iconThree === iconTwo && iconThree === iconFour) {
		iconThree = Math.floor(Math.random() * 12) + 1;
	}
	else if (iconFour === iconOne && iconFour === iconTwo && iconFour === iconThree) {
		iconFour = Math.floor(Math.random() * 12) + 1;
	}


	// run this loop until numberOne is different than numberThree
	/*do {
	    iconOne = Math.floor(Math.random() * 13) + 1;
	} while(iconOne === iconTwo && iconOne === iconThree && iconOne === iconFour);

	do {
    iconTwo = Math.floor(Math.random() * 13) + 1;
	} while(iconTwo === iconOne && iconTwo === iconThree && iconTwo === iconFour);

	do {
    iconThree = Math.floor(Math.random() * 13) + 1;
	} while(iconThree === iconTwo && iconThree === iconOne && iconThree === iconFour);

	do {
    iconFour = Math.floor(Math.random() * 13) + 1;
	} while(iconFour === iconTwo && iconFour === iconThree && iconFour === iconOne);*/

	

	// if (number < 19){
	// 	number = Math.floor(Math.random() * 120 + 1);
	// 	console.log(number);
	// 	$("#randomNumber").html(number);
	// }
	// else {
	// 	console.log(number);
	// 	$("#randomNumber").html(number);
	// }

console.log(number);
console.log("icon one = " + iconOne);
console.log("icon two = " + iconTwo);
console.log("icon three = " + iconThree);
console.log("icon four = " + iconFour);





	$("#img1").on("click", function() {
		for (var i = iconOne; i + score; i++){
		$("#score").text(i);	
	};
	})	
			

	// $("#img2").on("click", function() {
	// 	if (iconTwo == 0){
	// 		iconTwo = Math.floor(Math.random() * 13);
	// 		console.log(iconTwo);
	// 		score = iconTwo + score;
	// 		$("#score").html(score);

	// 	}
	// 	else {
	// 	console.log(iconTwo);
	// 	}
	// })

	// $("#img3").on("click", function() {
	// 	if (iconThree == 0){
	// 		iconThree = Math.floor(Math.random() * 13);
	// 		console.log(iconThree);
	// 	}
	// 	else {
	// 	console.log(iconThree);
	// 	}
	// })

	// $("#img4").on("click", function() {
	// 	if (iconFour == 0){
	// 		iconFour = Math.floor(Math.random() * 13);
	// 		console.log(iconFour);
	// 	}
	// 	else {
	// 	console.log(iconFour);
	// 	}
	// })

	$("#score").html(score);

// $("#img2").on("click", function() {
// 	if (iconTwo === iconOne || iconTwo === iconThree || iconTwo === iconFour || iconTwo === 0) {
// 		iconTwo = Math.floor(Math.random() * 13);
// 		console.log(iconTwo);
// 	}	
// 	else {
// 	console.log(iconTwo);
// 	}
// })

// for (var i = iconTwo; i == iconOne || i == iconThree || i == iconFour; i++) {
// 	iconTwo = Math.floor(Math.random() * 13);
// 	$("#img2").on("click", 
// 	console.log("this is the for loop " + i));
// }

var numberOptionsOne = [1, 2, 3];
var numberOptionsTwo = [5, 6, 7];
var numberOptionsThree = [9, 10, 11];
var numberOptionsFour = [4, 8, 12];

for (var i = 0; i < numberOptionsOne.length; i++) {
	iconOne = numberOptionsOne[i];
	console.log(iconOne);
	// var iconOne = $("#img1");
	// iconOne.addClass("icon-image");
	// iconOne.attr("src", "assets/images/hobbit.png");
	// iconOne.attr("data-iconOne", numberOptionsOne[i]);
	// $("#img1").append(iconOne);