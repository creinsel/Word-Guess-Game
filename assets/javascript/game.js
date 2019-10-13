    //alert("Guess the Current Word below by typing any letter. You have 10 tries for each word.");

    var wordList=[
    "whoville",
    "christmas",
    "green",
    "max",
    "heart",
    "jazzercise",
    "hate"
    ];
    const htmlNode= document.getElementById("container");


    function pickWord(){
    //make random wordbank chooser--> chooses word from list randomly
    var randomIndex = Math.floor(Math.random() * wordList.length);
    console.log(randomIndex);

    // randomWordToGuess is the random word chosen from the array
    var randomWordToGuess= wordList[randomIndex];
    console.log(randomWordToGuess);

    
    // need to generate underscores for the length of randomWordToGuess
    // wordDashes is array to store underscores
    var wordDashes=[];
    
   // for loop generates underscores in place of letters and pushes them to wordDashes array
    for (let i = 0; i < randomWordToGuess.length; i++) {
            wordDashes[i]="_"
        
        //const element= randomWordToGuess[randomIndex];
        // wordDashes.push("_");
        // wordDashes.toString();
    
console.log(wordDashes)
    //displays output from above on html
    document.getElementById("dash-box").innerHTML= " " +wordDashes.join(" ");
    };

};
pickWord();
    
 

    // will represent userGuess. No definition yet bc I want it to exist outside scope if I make a function
    var userGuess
 
    //to begin game
    var begin= false;

    //user wins
    var wins=0;
    //document.getElementById("wins").innerHTML=wins;

    //represents amount of guesses user has left
    var guessesLeft=10;
   
        document.getElementById("guesses-left").innerHTML=guessesLeft;
    

    // array to store letters user has guessed
    var lettersGuessed= [];
    document.getElementById("letters-guessed");

   

    