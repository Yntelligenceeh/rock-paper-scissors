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

let playerScore = 0;
let computerScore = 0;

function playARound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore += 1;
        computerScore +=1;
        return "You tied in this round. Score: " + playerScore + " : " + computerScore;
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore +=1;
        return "You Lose! Paper beats Rock. Score: " + playerScore + " : " + computerScore;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore +=1;
        return "You Lose! Scissors beats Paper. Score: " + playerScore + " : " + computerScore;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore +=1;
        return "You Lose! Rock beats Scissors. Score: " + playerScore + " : " + computerScore;
    }

    else if(computerSelection === "rock" && playerSelection === "paper") {
        playerScore += 1;
        return "You Win! Paper beats Rock. Score: " + playerScore + " : " + computerScore;
    }
    else if(computerSelection === "paper" && playerSelection === "scissors") {
        playerScore += 1;
        return "You Win! Scissors beats Paper. Score: " + playerScore + " : " + computerScore;
    }
    else if(computerSelection === "scissors" && playerSelection === "rock") {
        playerScore += 1;
        return "You Win! Rock beats Scissors. Score: " + playerScore + " : " + computerScore;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(playARound(getPlayerChoice(), getComputerChoice()));
    }
    
        if(i = 5 && playerScore > computerScore) {
            console.log("You won the game!");
        }
        else if(i = 5 && playerScore < computerScore) {
            console.log("Oh no, you lost the game!")
        }
        else if(i = 5) {
            console.log("It's a tie, no one won the game!")
        }
}

game();




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