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

    // var scorePlayer = 0
    // var scoreComputer = 0
    // const winner = ['You are the Winner!!!', 'Computer is the Winner...']

    // do{
    //     var roundWinner = gameRound(playerChoice, getComputerChoice())
    //     if(roundWinner){
    //         scorePlayer++
    //     } else{
    //         scoreComputer++
    //     }

    //     computerScore.textContent = scoreComputer;
    //     playerScore.textContent = scorePlayer;

    // } while(scoreComputer < 5 && scorePlayer < 5)

    // if(scoreComputer == 5){
    //     console.log(winner[1])
    // } else{
    //     console.log(winner[0])
    // }

    // return true;
}

function isGameOver(){
    return scoreComputer > 5 || scorePlayer > 5;
}

function endGame(){
    roundWinner.textContent = ((scoreComputer<scorePlayer) ? 'YOU WON!!!' : 'You lost...');
    roundMessage.textContent = 'Let\'s play another one!'
    scoreComputer = 1;
    scorePlayer = 1;
    playerScore.textContent = '0';
    computerScore.textContent = '0';
}

function getComputerChoice(){ //randomly return 'rock' 'paper' or 'scissors'
    //choices array
    const choices = ['rock', 'paper', 'scissors']

    //generate a random number
    const randIndex = Math.floor(Math.random() * choices.length)

    return choices[randIndex]
}

function gameRound(playerSelection, computerChoice){

    //Compare Round Choices
    if(playerSelection == computerChoice){
        roundTie()
    } 
    else if (playerSelection == 'rock' && computerChoice == 'paper' ||
    playerSelection == 'scissors' && computerChoice == 'rock' ||
    playerSelection == 'paper' && computerChoice == 'scissors'){
       roundIsWinner(false)
    } 
    else if (computerChoice == 'rock' && playerSelection == 'paper' ||
    computerChoice == 'scissors' && playerSelection == 'rock' ||
    computerChoice == 'paper' && playerSelection == 'scissors'){
        roundIsWinner(true)
    }
}

function roundIsWinner(isWinner){ //Round Winner Point addition 
    (isWinner) ? playerScore.textContent = scorePlayer++ : computerScore.textContent = scoreComputer++;
}

function roundTie(){ //Round Tie
    console.log('Tie Round... Replay!')
}

