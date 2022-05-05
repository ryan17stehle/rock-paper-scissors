function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    console.log('Computer choice: ' + choices[randomIndex])
    return choices[randomIndex]
}

function playRound(player, computer) {
    player = player.toLowerCase();
    if (player === 'rock') {
        // Win
        if (computer === 'scissors') return "You win! Rock beats scissors."
        // Lose 
        else if (computer === 'paper') return "You lose! Paper beats rock."
        // Tie
        else return "Tie game!"
    } else if (player === 'paper') {
        // Win
        if (computer === 'rock') return "You win! Paper beats rock."
        // Lose 
        else if (computer === 'scissors') return "You lose! Scissors beat paper."
        // Tie
        else return "Tie game!"
    } else if (player === 'scissors') {
        // Win
        if (computer === 'paper') return "You win! Scissors beat paper."
        // Lose 
        else if (computer === 'rock') return "You lose! Rock beats scissors."
        // Tie
        else return "Tie game!"
    } else return "Did not recognize player choice."
}

function game() {
    // run a 5 round game
    let numRounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= numRounds; i++) {
        // run the round
        console.log("Round " + i);
        let playerChoice = prompt("Enter your choice: rock, paper, or scissors!");
        let computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice)

        // determine the winner / update score
        if (result.includes('win')) {
            console.log(result);
            playerScore += 1;
        } else if (result.includes('lose')) {
            console.log(result);
            computerScore += 1;
        } else {
            console.log(result);
        }

        // log scores for testing
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    }
}

// game()