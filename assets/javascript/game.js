// Same idea as hangman - difference is not taking random numbers from the array
// Still need to assign a global variable for each object
// Once all global variables assigned, then start the game with a function
// All counters must be set empty and back to the beginning despite reset button (to restart game)
// Create a random number using math.floor and consol.log
// Values need to be added to the counter, all different values depending on the gem
// Create a function to determine wins and losses...for loop doesn't work, if, else?

// set all global variable values to 0
var winsLosses = 0;
var wins = 0;
var losses = 0;
var usersNum = 0;

// including crystals
var gems = {
  blue: {name: "Blue", value: 0}, 
  green: {name: "Green", value: 0},
  red: {name: "Red", value: 0},
  yellow: {name: "Yellow", value: 0}
};

var numGenerator = 0;

function startgame() {

	numGenerator = randomNumber();
	console.log(numGenerator);

	gems.blue.value = numGen();
  console.log(gems.blue.value); // this will no longer be 0, it'll be an actual random number
  
  gems.green.value = numGen();
  console.log(gems.green.value); 

  gems.red.value = numGen();
  console.log(gems.red.value);
  
  gems.yellow.value = numGen();
  console.log(gems.yellow.value);

  $(".numGenerator").text(numGenerator);
}

function determineWins() {
	if(usersNum > numGenerator) {
	  alert("Better luck next time!");
	  	losses++;
	  	document.getElementById("losses-count").innerHTML = losses;
	  	console.log("Better luck next time!");
	  	startgame();
}
	else if(usersNum === numGenerator) {
		alert("For the win!")++;
		document.getElementById("wins-count").innerHTML = wins;
		console.log("For the win!");
		startgame();
	}


var randomNumber = function() {
	return Math.floor(Math.random() * (120 - 19)) + 19;
}

var numGen = function() {
  return Math.floor(Math.random() * 12) + 1;
}

$( "#gem_1" ).click(function() {
  usersNum = usersNum + gems.blue.value;

});

$( "#gem_2" ).click(function() {
  usersNum = usersNum + gems.green.value;
  	losses++;
	  	document.getElementById("losses-count").innerHTML = losses;
	  	console.log("Better luck next time!");

});
$( "#gem_3" ).click(function() {
 usersNum = usersNum + gems.red.value;

});
$( "#gem_4" ).click(function() {
 usersNum = usersNum + gems.yellow.value;
});



startgame(); // Just for aesthetics (and to limit bugs we might run into) try to call your functions at the bottom	OK!
