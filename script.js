function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    let playerWon = null;

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        playerWon = null;
    } else if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ) {
        playerWon = true;
    } else if (playerSelection == "ROCK" || playerSelection == "PAPER" || 
                playerSelection == "SCISSORS"){
        playerWon = false;
    }
    return playerWon;
}


function playWithButton() {
    let playerWon = playRound(this.id, computerPlay());
    updateScore(playerWon);
}

function updateScore(playerWon) {
    const resultText = document.querySelector(".result");
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");

    let message = "";
    let score;
    if (playerWon) {
        score = parseInt(playerScore.textContent);
        score++;
        playerScore.textContent = score;
        if (score >= 5) {
            message = "You Won The Game!!!";
            resetScore();
        } else {
            message = "You Won The Round!";
        }
    } else if (playerWon === false) {
        score = parseInt(computerScore.textContent);
        score++;
        computerScore.textContent = score;
        if (score >= 5) {
            message = "The Computer Won The Game!!!";
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
buttons.forEach(btn => btn.addEventListener("click", playWithButton));