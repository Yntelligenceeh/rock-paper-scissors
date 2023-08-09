function getPlayerChoice() {
    const playerOptions = ["rock", "paper", "scissors"];
    let playerPick = prompt("Pick rock, paper or scissors", "rock");
    
    if(playerOptions.includes(playerPick.toLowerCase())) {
        console.log("Player picked: " + playerPick);
        return playerPick;
    }
    else return "Invalid selection, please only pick rock, paper or scissors.";
}

function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)]
    console.log("Computer picked: " + computerPick);
    return computerPick;
}

function playARound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie, please try again.";
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }

    else if(computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock";
    }
    else if(computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beats Paper";
    }
    else if(computerSelection === "scissors" && playerSelection === "rock") {
        return "You Win! Rock beats Scissors";
    }
}

console.log(playARound(getPlayerChoice(), getComputerChoice()));


/*
function playARound(playerSelection, computerSelection) {
    let playerSelection = prompt("Pick rock, paper or scissors", "rock")
    let computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === str1 || 
    playerSelection.toLowerCase() === str2 ||
    playerSelection.toLowerCase() === str3) {

    }
    else print("Invalid selection, please only pick rock, paper or scissors.");
}
*/