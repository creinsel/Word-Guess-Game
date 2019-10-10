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

    const htmlNode= document.getElementById("container");
    // need to generate underscores for the length of randomWordToGuess
    var wordDashes=[];

        wordDashes[randomWordToGuess]="_";   
    for (let randomIndex = 0; randomIndex < randomWordToGuess.length; randomIndex++) {
            const element= randomWordToGuess[randomIndex];
        wordDashes.push("_");
        wordDashes.toString()

    document.getElementById("dash-box").innerHTML=wordDashes;
    console.log(wordDashes);
    };
    

    document.onkeyup=function(event){
    var userGuess= event.key;
    console.log(userGuess);

}
