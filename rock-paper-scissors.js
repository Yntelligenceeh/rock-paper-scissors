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
