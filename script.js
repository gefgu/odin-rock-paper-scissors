function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    let playerVictory = null;

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        playerVictory = null;
    } else if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ) {
        playerVictory = true;
    } else if (playerSelection == "ROCK" || playerSelection == "PAPER" || 
                playerSelection == "SCISSORS"){
        playerVictory = false;
    }
    return playerVictory;
}


function playButton() {
    const resultText = document.querySelector(".result");
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");

    let playerVictory = playRound(this.id, computerPlay());

    let message = "";
    let score;
    if (playerVictory) {
        score = parseInt(playerScore.textContent);
        score++;
        playerScore.textContent = score;
        if (score >= 5) {
            message = "You Won The GAME!!!";
            resetScore();
        } else {
            message = "You Won The Round!";
        }
    } else if (playerVictory === false) {
        score = parseInt(computerScore.textContent);
        score++;
        computerScore.textContent = score;
        if (score >= 5) {
            message = "The Computer Won The GAME!!!";
            resetScore();
        } else {
            message = "The Computer Won The Round!";
        }
    } else {
        message = "Draw!";
    }

    resultText.textContent = message;
}

function resetScore() {
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");

    playerScore.textContent = "0";
    computerScore.textContent = "0";
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", playButton));