//Beginning of letters//
var wordbank = [
	'Zeppelin',
	'Sabbath',
	'Beatles', 
	'Hendrix',
	'Drummer',
	'KISS',
	"Guitar",
]


//Word choosing
var randomWordGenerator = Math.floor(Math.random() * wordbank.length);
var chosenWord=wordbank[randomWordGenerator];
var chosenWordArr=chosenWord.split("");
var displayArr=[];

//counters
var maxCount=20;
var count=0;
var guessesLeft = (maxCount - count);

//Tells You the Word In The Console Log
console.log("Spoiler: The Word Is: ", chosenWord);


//choses random words and allows 
	for(var i=0; i < chosenWord.length; i++) {
		 displayArr.push(chosenWordArr[i].replace(chosenWordArr[i],"_"));
		 
	} 

	 document.querySelector("#wordDisplay").innerHTML=displayArr.join(" ");





 