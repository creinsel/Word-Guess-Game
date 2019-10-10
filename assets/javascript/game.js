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
    
   
    for (let randomIndex = 0; randomIndex < randomWordToGuess.length; randomIndex++) {
            const element= randomWordToGuess[randomIndex];
        wordDashes.push("_");
        wordDashes.toString();

    
    console.log(wordDashes);
    };
    document.getElementById("dash-box").innerHTML= " " +wordDashes.join(" ");
//records keystrokes
    document.onkeyup=function(event){
    var userGuess= event.key;
    console.log(userGuess);

   // if userGuess===(letter in randomWordToGuess){
       //fill in corresponding letter
       //else{
    //        lettersGuessed.push(userGuess);
    //        lettersGuessed.toString();
    //        guessesLeft --;
    //    }
   //}

}
