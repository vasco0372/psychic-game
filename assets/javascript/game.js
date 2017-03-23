//script for psychic game//
var numWins=0;
var numLosses=0;
var guessesLeft=9;
var yourGuesses=[];
var userGuess="";
//print initial variables//
var printResults=function(){
	document.getElementById("wins").innerHTML="Wins: "+ numWins;
	document.getElementById("yourGuesses").innerHTML="Your Guesses: "+ yourGuesses;
	document.getElementById("guessesLeft").innerHTML="Guesses Left: "+ guessesLeft;
	document.getElementById("losses").innerHTML="Losses: "+ numLosses;
}

var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
playAgain=true;
// while(true){
	
	//generate a computer guessed letter//
	randomNumber=Math.floor(Math.random()*26);
	 computerChoice=letters[randomNumber];
	//get user input letter//
	// alert("Guess a letter")//
	document.onkeydown=function(event){
		userGuess=event.key;
		yourGuesses.push(userGuess);
		// alert(userGuess);
		guessesLeft--;
		printResults();
		
		if(userGuess===computerChoice){
		alert("You Win! Guessing new letter!");
		numWins++;
		guessesLeft=9;
		yourGuesses=[];
		printResults();
		}

		else{
			// alert("Guess again");
			if(guessesLeft<1){
				alert("You lost.  Restarting game");
				numLosses++;
				guessesLeft=9;
				yourGuesses=[];
				printResults();
			}
		}
	}
// }
