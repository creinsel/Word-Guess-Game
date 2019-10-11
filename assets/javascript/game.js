    //var Rules= confirm("Guess the Current Word below by typing any letter. You have 10 tries for each word.");

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
    for (let randomIndex = 0; randomIndex < randomWordToGuess.length; randomIndex++) {
            const element= randomWordToGuess[randomIndex];
        wordDashes.push("_");
        wordDashes.toString();

    };
    //displays output from above on html
    document.getElementById("dash-box").innerHTML= " " +wordDashes.join(" ");

    //variables to appearon screen
    var wins=0;
    //document.getElementById("wins").innerHTML=wins;

    var guessesLeft=10;
   
        document.getElementById("guesses-left").innerHTML=guessesLeft;
    


    var lettersGuessed= [];
    document.getElementById("letters-guessed");

    var possibleLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
console.log(guessesLeft);
//records keystrokes
    document.onkeyup=function(event){
    var userGuess= event.key;
    
    }
        
            
      



   