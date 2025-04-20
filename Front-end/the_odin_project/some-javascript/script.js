getComputerChoice = () => { 
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

getHumanChoice = () => {
    // Get user input from a prompt
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    // Validate input
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return "You win! Rock beats scissors.";
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return "You win! Paper beats rock.";
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        return "You win! Scissors beats paper.";
    }
    return "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".";
}

let humanScore = 0;
let computerScore = 0;

console.log(playRound(getHumanChoice(), getComputerChoice()));