
// Choose the play from an array
// Use Math.random
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

// Get playerSelection and computerSelection
// UpperCase them
// If they are equal return draw string
// Check for each case of vitory of the player
// Case true return vitory string
// If playerSelection is a valid value return defeat string
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
        return `You Win! ${playerSelection} bets ${computerSelection}`;
    } else if (playerSelection == "ROCK" || 
                playerSelection == "PAPER" || 
                playerSelection == "SCISSORS"){
        return `You Lose! ${computerSelection} bets ${playerSelection}`;
    } else {
        return "Invalid player selection";
    }
}