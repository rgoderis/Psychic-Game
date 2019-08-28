    // create variable to store my values. Wins, Losses, userGuess, computerGuess, computerChoices
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var userGuess;
var computerGuess;
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');
var displayText = "This is a test";

// create function to display the results to page DOM
function updateDisplay(){
    document.querySelector("#display-text").innerHTML = displayText;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guess-left").innerHTML = guessLeft;
    document.querySelector("#guess-so-far").innerHTML = guessSoFar;
};

// create function to generate a random letter for computerGuess
function computerRandomLetter(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// create function to reset scores
function resetScores(){
    guessLeft = 9;
    guessSoFar = [];
};

computerRandomLetter()
// create a onkeyup envent function to grab userGuess
document.onkeyup = function(event){
    userGuess = event.key
    // variables for is user wins
    if(userGuess === computerGuess){
        // win score goes up
        wins++;
        // guess left and guess so far reset
        resetScores();
        // h3 displays victory text
        displayText = "You Won"
        // updates new results to the DOM
        updateDisplay();
        // computer guesses new letter
        computerRandomLetter();
    }
    else{
        // pushes user guess to the guess so far array
        guessSoFar.push(userGuess);
        // subtracts from guesses left
        guessLeft--;
        // h3 displays try again
        displayText = "Try Again";
        // updates new results to DOM
        updateDisplay();
    }
    // fires if there are no guesses left
    if(guessLeft === 0){
        // loss score goes up
        losses++;
        // guess left and guess so far reset
        resetScores();
        // displays victory text for computer
        displayText = "Computer Won";
        // updates new results to DOM
        updateDisplay();
        // computer guesses new letter
        computerRandomLetter();
    }
}