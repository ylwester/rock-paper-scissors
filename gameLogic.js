let playerScore = 0;
let computerScore = 0;


function computerPlay () {
    const possibleChoices = ["rock", "paper", "scissors"];
    return possibleChoices[Math.floor((Math.random() * possibleChoices.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Its a tie!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats rock!."
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper!."
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock!."
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper!."
    } else {
        return "Something went wrong, is your input correct?"
    }
}

function game() {
    for(let roundPlayed = 0; roundPlayed <= 5; roundPlayed++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt("What do you choose? Rock, paper, scissors?")
        alert(playRound(playerSelection, computerSelection));
    }
    if (playerScore < computerScore) {
        alert("Sorry, you lost this time.\nYour score: " + playerScore + "\nComputer score: "+ computerScore)
    } else if (playerScore > computerScore) {
        alert("Nice! You win.\nYour score: " + playerScore + "\nComputer score: "+ computerScore)
    } else {
        alert("Tied game.")
    }
}
