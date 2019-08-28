    // create variable to store my values. Wins, Losses, userGuess, computerGuess, computerChoices
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var userGuess;
var computerGuess;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"]
var displayText = "This is a test";



    // create function to display the results to page DOM
    function updateDisplay(){
        document.querySelector("#display-text").innerHTML = displayText;
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
        document.querySelector("#guess-left").innerHTML = guessLeft;
        document.querySelector("#guess-so-far").innerHTML = guessSoFar;
    };

    updateDisplay();

    // create function to generate a random letter for computerGuess
    function computerRandomLetter(){
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }


    // create function to reset scores
    function resetScores(){
        var guessLeft = 9;
        var guessSoFar = [];
    }
    computerRandomLetter()
    // create a onkeyup envent function to grab userGuess
    document.onkeyup = function(event){
        userGuess = event.key
        console.log(userGuess);
        console.log(computerGuess)
        if(userGuess === computerGuess){
            wins++;
            resetScores();
            updateDisplay();
        }
        else if()
        {
            losses++

        }
    }
    
    
    
    