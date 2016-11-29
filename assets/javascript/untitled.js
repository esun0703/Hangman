if(event.keyCode >=65 && event.keyCode <=90){
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

 document.getElementById("#guessesLeft").innerHTML = guessesLeft;



 






