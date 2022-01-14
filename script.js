function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        return "Draw!";
    } else if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "ROCK" || 
                playerSelection == "PAPER" || 
                playerSelection == "SCISSORS"){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `${playerSelection} is an invalid choice`;
    }
}


function playButton() {
    console.log(playRound(this.id, computerPlay()));
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", playButton));