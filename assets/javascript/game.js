var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playerWins = 0;
var playerLosses = 0;
var triesLeft = 20;
var lettersGuessed = [];
var computerChoice = [];



document.onkeyup = startGame;

function startGame (event) {
    var playerLetter = event.key;
    lettersGuessed.push(playerLetter);
    console.log(computerChoice);

    for (var j = 0; j < choices.length; j++) {
    var computerLetter = choices[j];
    computerChoice.push(computerLetter);
    console.log(computerChoice[0]);
    }
    if ((playerLetter === computerLetter) && (triesLeft > 0)) {
        playerWins++;
        document.getElementById("playerWins").textContent = playerWins;
        triesLeft= 20;
        document.getElementById("losses").textContent = playerLosses;
        document.getElementById("guessesLeft").textContent = triesLeft;
        document.getElementById("")
        alert("You guessed correctly!");
        computerChoice.push(computerLetter);
        console.log(computerChoice);

    }

    else if ((playerLetter !== computerLetter) && (triesLeft > 0)) {
        triesLeft--;
        alert("You guessed incorrectly. You have " + triesLeft + " more tries. These are the letters you have already guessed: " + lettersGuessed + ".");
        document.getElementById("playerWins").textContent = playerWins;
        document.getElementById("losses").textContent = playerLosses;
        document.getElementById("guessesLeft").textContent = triesLeft;
        document.getElementById("letters").textContent = lettersGuessed;
        computerChoice.push(computerLetter);
        console.log(computerChoice);
    }

    else {
        playerLosses++;
        triesLeft = 0;
        alert("You lost");
        document.getElementById("playerWins").textContent = playerWins;
        document.getElementById("losses").textContent = playerLosses;
        document.getElementById("guessesLeft").textContent = triesLeft;
        document.getElementById("letters").textContent = lettersGuessed;
        computerChoices.push(computerLetter);
        console.log(computerChoice);
    }
};