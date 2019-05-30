var wins = 0;
var losses = 0;
var computerChoices = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var UserGuessText = document.getElementById("guessSoFar");
var guessLeftText = document.getElementById("guessLeft");
var userGuess = [];
var guessHistory;

document.onkeyup = function(event){
    var guessSoFar = event.key.toLowerCase();

    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];

    for (var i = 16; i > 0; i--) {
        guessLeftText = i;
    } 

    for( var i = 1; i <=16; i++) {
        userGuess.push(guessHistory);
    }
    
    for (var j = 0; j <userGuess.length; j++){
        UserGuessText.textContent = userGuess[j];
    }
    
    if (guessSoFar === computerGuess && guessLeftText > 0) {
        wins++
        alert("Yay you guessed right! The computer guessed: " + computerGuess)
    } else {
        losses++
        alert("Oh no! I'm sorry, the computer guessed: " + computerGuess)
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;
    UserGuessText.textContent = guessSoFar;
    guessLeftText.textContent = guessLeft;
}