var wins = 0;
var losses = 0;
var computerChoices = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var UserGuessText = document.getElementById("guessSoFar");
var guessLeftText = document.getElementById("guessLeft");
var userGuess = [];
var computerGuess;

function resetGame(){
    guessLeftText.textContent = 16;
    userGuess = [];
    UserGuessText.textContent = "";
    guessCount = 0;
    computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}
    
//Init game for first run
window.onload = function() {
    resetGame();
}

document.onkeyup = function(event){
    var guessSoFar = event.key.toLowerCase();

    if(computerChoices.indexOf(guessSoFar) > -1){

        if (userGuess.indexOf(guessSoFar) > -1){
            alert ("Please choose a different letter!");
        } else {
            
            userGuess.push(guessSoFar);
            UserGuessText.textContent = userGuess.join();
            guessLeftText.textContent = 16 - userGuess.length;
            
            if (guessSoFar === computerGuess && userGuess.length < 16) {
                wins++;
                winsText.textContent = wins;
                alert("Yay you guessed right! The computer guessed: " + computerGuess);
                resetGame();
            } else if (guessSoFar != computerGuess && userGuess.length === 16) {
                losses++;
                lossesText.textContent = losses;
                alert("Oh no! I'm sorry, the computer guessed: " + computerGuess);
                resetGame();
            }
            
        }
    }else if (guessSoFar != "f5"){
        alert("please choose a valid key between A-Z");
    }
        
}