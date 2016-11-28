//Beginning of letters//
var wordbank = [
	'Led Zeppelin',
	'Black Sabbath',
	'The Beatles', 
	'The Who',
	'Iron Maiden',
	'Jimi Hendrix',
	'The Beatles',
	'The Who',
	'Pink Floyd',
	'Kiss',
]

var gameSounds={}
//Random choosing function from wordbank array//
var randomWordIndex = Math.floor(Math.random() * wordbank.length);
//Allows chosen word to be the array of randomWordIndex//
var chosenWord = wordbank[randomWordIndex];
//Splits characters in word bank into single letters//
var chosenWordArr=chosenWord.split("");
//?
var displayArr=[];

//choses random words and allows 
for(var i=0; i < chosenWordArr.length; i++) {
	displayArr.push(chosenWordArr[i].replace(chosenWordArr[i],"_"));
}

document.querySelector("#display").innerHTML=displayArr.join(" ");

//Beginning for guesses//
var maxCount=20;
var count=0;
var guessesLeft = maxCount - count;
document.querySelector("#guessesLeft").innerHTML = guessesLeft;

console.log("Spoiler Aert: The word is ", chosenWord);


//Beginning for KeyDowns//
document.onkeydown = function(event){
	var guessesLeft = maxCount - count;
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	function checkForWinner(){
		if(displayArr.indexOf("_") !== -1){
			if(count === maxCount){
				document.onkeydown = null
				document.querySelector("#winOrLose").innerHTML = "<h3> You Lose!</h3>";
				restartGame();
			}
		}

		if(displayArr.indexOf("_") === -1){
			document.onkeydown=null
			document.querySelector("#winOrLose").innerHTML = "<h3> You Won!</h3>";
			restartGame();
		}
	}

	function restartGame(){
		setTimeout(function(){
			location.reload()
		}, 2300);
	}
}

 if(event.keyCode >=65 && even.keyCode <=90){
 	var keyPress = event.key;
 	if(count !== maxCount){
 		for(var i=0; i < chosenWord.length; i++){
 			if(keyPress === chosenWord.charAt (i)){
 				count++
 				guessesLeft--
 				document.querySelector("#guessesLeft").innerHTML = guessesLeft;
 				document.querySelector("#guessOutcome").innerHTML = "Correct !";
 				displayArr[i]=keyPress;
 				document.querySelector("#display").innerHTML = displayArr.join(" ");
 				checkForWinner();

 			}
 		}

 	if(chosenWord.indexOf(keyPress)=== -1){
 		count++
 		guessesLeft--
 		document.querySelector("#guessesLeft").innerHTML = guessesLeft;
 		document.querySelector("#guessOutcome").innerHTML = "Wrong !";
 			checkForWinner();
 		}
 	}
 }


 




