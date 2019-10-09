//var Rules= confirm("Guess the Current Word below by typing any letter. You have 10 tries for each word.");

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
var randomIndex = Math.floor(Math.random() * wordList.length);
console.log(randomIndex);

// randomWordToGuess is the random word chosen from the array
var randomWordToGuess= wordList[randomIndex];
console.log(randomWordToGuess);

// need to generate underscores for the length of randomWordToGuess
 var wordDashes= [];

    wordDashes[randomWordToGuess]="_";   
 for (let randomIndex = 0; randomIndex < randomWordToGuess.length; randomIndex++) {
     const element=randomWordToGuess[randomIndex];
console.log(wordDashes);
};

// create array to store used words and another to store used letters
    //lettersGuessed=store letters
    //

//display dashes in current word
    // document.getElementById("current-word")
    
// create function to capture keystrokes



// https://stackoverflow.com/questions/47787313/javascript-creating-a-guess-the-word-game



let guessesLeft=10;
let wins=0;
let lettersGuessed= []

const htmlNode= document.getElementById('');
//should i make a sep div? not sure what to put here

document.onkeyup=function(event){
  var userGuess= event.key;
}