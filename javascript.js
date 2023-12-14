


function getComputerChoice(){ //randomly return 'rock' 'paper' or 'scissors'
    //choices array
    const choices = ['rock', 'paper', 'scissors']

    //generate a random number
    const randIndex = Math.floor(Math.random() * choices.length)

    return choices[randIndex]
}


function getPlayerChoice(){
    return prompt('Your choice : ').toLowerCase() //get player choice
}

function gameRound(playerSelection, computerSelection){

    var winner = false; // true is player, false is computer

    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){

        //Compare Round Choices

        if(playerSelection == computerSelection){
            roundTie()
            gameRound(getPlayerChoice(), getComputerChoice()) 
        } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'scissors' && computerSelection == 'rock' ||
        playerSelection == 'paper' && computerSelection == 'scissors'){

            roundLoser(computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase(), playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase())
            winner!=false
        } else if (computerSelection == 'rock' && playerSelection == 'paper' ||
        computerSelection == 'scissors' && playerSelection == 'rock' ||
        computerSelection == 'paper' && playerSelection == 'scissors'){

            roundWinner(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(), computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase())
            winner=true
        }

    } else{ //Choice entered is not one of the possibilities
        console.log(playerSelection + ' choice is not possible... (Rock, Paper, Scissors)')
        gameRound(getPlayerChoice(). getComputerChoice())
    }

    return winner
}

function roundWinner(playerChoice, computerSelection){ //Round Won by the Player
    return console.log('You won the Round!!! ' + playerChoice + ' beats ' + computerSelection + ' Next Round!')
}

function roundLoser(computerSelection, playerChoice){ //Round Won by the Computer
    return console.log('You lost the Round... ' + computerSelection + ' beats ' + playerChoice + ' Next Round!')
}

function roundTie(){ //Round Tie
    return console.log('Tie Round... Replay!')
}
