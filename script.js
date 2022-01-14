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
        message = "You Win!";
    } else if (playerVictory === false) {
        score = parseInt(computerScore.textContent);
        score++;
        computerScore.textContent = score;
        message = "You Lost!";
    } else {
        message = "Draw!";
    }

    resultText.textContent = message;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", playButton));