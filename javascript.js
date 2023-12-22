var scorePlayer = 1;
var scoreComputer = 1;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerScore = document.getElementById('computerScore');
const playerScore = document.getElementById('playerScore');
const btns = document.querySelectorAll('.choices');
const roundMessage = document.getElementById('roundMessage');
const roundWinner = document.getElementById('roundWinner');

btns.forEach(btn => btn.addEventListener('click', event => game(event.target.id)));

function game(playerChoice){
    gameRound(playerChoice, getComputerChoice());

    if(isGameOver()){
        endGame();
        return;
    }
}

function isGameOver(){ //Check if game is over
    return scoreComputer > 5 || scorePlayer > 5;
}

function endGame(){ //ending message after the game
    roundWinner.textContent = ((scoreComputer<scorePlayer) ? 'YOU WON!!!' : 'You lost...');
    roundMessage.textContent = 'Let\'s play another one!'
    scoreComputer = 1;
    scorePlayer = 1;
    playerScore.textContent = '0';
    computerScore.textContent = '0';
}

function getComputerChoice(){ //randomly return 'rock' 'paper' or 'scissors'
    //choices array
    const choices = ['rock', 'paper', 'scissors'];

    //generate a random number
    const randIndex = Math.floor(Math.random() * choices.length);

    return choices[randIndex];
}

function gameRound(playerSelection, computerSelection){
    //Compare Round Choices
    if(playerSelection == computerSelection){
        roundIsWinner(null, playerSelection, computerSelection);
    } 
    else if (playerSelection == 'rock' && computerSelection == 'paper' ||
    playerSelection == 'scissors' && computerSelection == 'rock' ||
    playerSelection == 'paper' && computerSelection == 'scissors'){
       roundIsWinner(false, playerSelection, computerSelection);
    } 
    else if (computerSelection == 'rock' && playerSelection == 'paper' ||
    computerSelection == 'scissors' && playerSelection == 'rock' ||
    computerSelection == 'paper' && playerSelection == 'scissors'){
        roundIsWinner(true, playerSelection, computerSelection);
    }
}

function roundIsWinner(isWinner, playerSelection, computerSelection){ //Round Winner Point addition 
    switch(isWinner){
        case true: 
            playerScore.textContent = scorePlayer++;
            roundMessage.textContent = "You won the round!";
            roundWinner.textContent = playerSelection + " beat " + computerSelection;
            break;
        case false:
            computerScore.textContent = scoreComputer++;
            roundMessage.textContent = "You lost the round...";
            roundWinner.textContent = computerSelection + " beat " + playerSelection;
            break;
        case null:
            roundMessage.textContent = "Round Tie! Replay";
            roundWinner.textContent = "You both played " + playerSelection;
            break;
    }
}
