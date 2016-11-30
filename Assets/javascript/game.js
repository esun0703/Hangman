//Variables
//===================================================================
//Beginning of letters//
var wordbank = [
	'zeppelin',
	'sabbath',
	'beatles', 
	'hendrix',
	'drummer',
	'kiss',
	"guitar",
]

var chosenWord = wordbank[Math.floor(Math.random() * wordbank.length)];
var lettersInWord=chosenWord.split("");
var numBlanks=lettersInWord.length;
var blanksAndWins=[];//z _ p p _ i _
var wrongLetters = [];

//counters
var winCount=0;
var lossCount=0;
var guessesLeft = 10;


//Functions
//=================================================================
function startGame (){

	//Reset
	guessesLeft = 10;
	wrongLetters =[];
	blanksAndWins=[];
	

	chosenWord = wordbank[Math.floor(Math.random() * wordbank.length)];
	lettersInWord=chosenWord.split("");
	numBlanks=lettersInWord.length;

	//Populate rightOrWrong with right number of blanks
	for(var i=0; i < numBlanks; i++) {
		 blanksAndWins.push("_");
	} 

	//change HTML
	 document.querySelector("#wordDisplay").innerHTML=blanksAndWins.join(" ");
	 document.querySelector("#guessesDisplay").innerHTML=guessesLeft;


	//Testing/Debugging
	console.log(chosenWord);
	console.log(lettersInWord);
	console.log(numBlanks + " letters in this word");
	console.log(blanksAndWins);

}

function checkLetters(letter){
	//checks if letter is in the word
	var isLetterInWord = false;
	
	for (var i=0; i<numBlanks;i++){
		if(chosenWord[i]==letter){
			isLetterInWord=true;
		}
	}

	//Check where in the word the letter exists then populate out blanks and Successes array.
	if(isLetterInWord){
		for (var i=0; i<numBlanks;i++){
			if(chosenWord[i]==letter){
				blanksAndWins[i]=letter;
			}
		}
	}

	//Letter Wasn't Found
	else{
		wrongLetters.push(letter);
		guessesLeft--;
	}
	//Testing and Debugging
	console.log(blanksAndWins)

}

function roundComplete(){
	console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + "| Guesses Left: "+ guessesLeft);
	
	//Update The HTML TO Reflect//
	document.querySelector("#guessesDisplay").innerHTML=guessesLeft;
	document.querySelector("#wordDisplay").innerHTML=blanksAndWins.join(" ");
	
	//Check If User Won
	if(lettersInWord.toString()==blanksAndWins.toString()){
		winCount++
		alert("You Won!");

		startGame();
	}

	else if(guessesLeft==0){
		lossCount++;
		alert("You Lost!");

		startGame();
	}

	

}
	

//Main Process
//==================================================================
//Initiates the code the first time
startGame();

//Registers keyclikcs

document.onkeyup=function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed)
	roundComplete();
	

	//Testing/Debugging
	console.log(letterGuessed);
}


 