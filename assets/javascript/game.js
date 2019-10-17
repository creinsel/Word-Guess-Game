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
   
     // need to generate underscores for the length of randomWordToGuess
    // wordDashes is array to store underscores
    var wordDashes=[];

   
    //make random wordbank chooser--> chooses word from list randomly
    var randomIndex = Math.floor(Math.random() * wordList.length);
    console.log(randomIndex);

    // randomWordToGuess is the random word chosen from the array
    var randomWordToGuess= wordList[randomIndex];
    console.log(randomWordToGuess);

    
    
   // for loop generates underscores in place of letters and pushes them to wordDashes array
    for (let i = 0; i < randomWordToGuess.length; i++) {
            wordDashes[i]="_"
        
        // const element= randomWordToGuess[randomIndex];
        // wordDashes.push("_");
        // wordDashes.toString();
    
// console.log(wordDashes)
    //displays output from above on html
    document.getElementById("dash-box").innerHTML= " " +wordDashes.join(" ");//change
    };

   


    
 

    // will represent userGuess. No definition yet bc I want it to exist outside scope if I make a function
    var userGuess
 

    //user wins
    var wins=0;
    //document.getElementById("wins").innerHTML=wins;

    //represents amount of guesses user has left
    var guessesLeft=10;
   
        document.getElementById("guesses-left").innerHTML=guessesLeft;
    

    // array to store letters user has guessed that are not in the current word
    var lettersGuessed= [];
    document.getElementById("letters-guessed");

    // function to push letters to the correct spot
    function storeLetters(userGuess){
        console.log(userGuess)
        console.log(randomWordToGuess.indexOf(userGuess)>=0)
        if (randomWordToGuess.indexOf(userGuess)>=0){
            
            for (let i = 0; i < randomWordToGuess.length; i++){
                if(userGuess===randomWordToGuess[i]){
                    wordDashes[i]=userGuess;
                    console.log(wordDashes);
                    document.getElementById("dash-box").innerHTML=wordDashes.join(" ");
                    }
            };
        }
        else
         {lettersGuessed.push(userGuess);
            guessesLeft--;
        }
       
            document.getElementById("guesses-left").innerHTML=guessesLeft; 
            document.getElementById("letters-guessed").innerHTML=lettersGuessed;
    };

    document.onkeyup=function(event){
    var userGuess= event.key;
     storeLetters(userGuess);
        
        };     

        function reset(){
            guessesleft=10;
            lettersGuessed=[]
            wordDashes=[]
        }
    

