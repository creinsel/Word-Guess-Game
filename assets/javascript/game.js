//var Rules= confirm("Guess the Current Word below by typing any letter. You have 15 tries for each word.");

   var wordList=[
  "whoville",
  "christmas",
  "green",
  "max",
  "mt crumpit",
  "cindy lou",
  "heart",
  "jazzercise",
  "hate"
];

//make random wordbank chooser--> chooses word from list randomly
var randomIndex = Math.floor(Math.random() * wordList.length) - 1;

// randomWordToGuess is the random word chosen from the array
var randomWordToGuess= wordList[randomIndex];
console.log(randomWordToGuess);

// need to generate underscores for the length of randomWordToGuess



// https://stackoverflow.com/questions/47787313/javascript-creating-a-guess-the-word-game

// or is it better to make an array for each word?

var wordOne=['w', 'h','o', 'v', 'i', 'l', 'l', 'e'];

let guessesLeft=15;
let wins=0;
//let lettersGuessed= ?

const htmlNode= document.getElementById('');
//should i make a sep div? not sure what to put here

document.onkeyup=function(event){
  var userGuess= event.key;
}