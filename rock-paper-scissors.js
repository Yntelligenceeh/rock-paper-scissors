function getPlayerChoice() {
    const playerOptions = ["rock", "paper", "scissors"];
    let playerPick = prompt("Pick rock, paper or scissors", "rock");
    
    if(playerOptions.includes(playerPick.toLowerCase())) {
        console.log("Player picked: " + playerPick);
        return playerPick;
    }
    else return "Invalid selection, please only pick rock, paper or scissors.";
}

