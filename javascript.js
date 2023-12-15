


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

function gameRound(playerSelection, computerChoice){

    var winner = false; // true is player, false is computer

    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){

        //Compare Round Choices

        if(playerSelection == computerChoice){
            roundTie()
            gameRound(getPlayerChoice(), getComputerChoice()) 
        } else if (playerSelection == 'rock' && computerChoice == 'paper' ||
        playerSelection == 'scissors' && computerChoice == 'rock' ||
        playerSelection == 'paper' && computerChoice == 'scissors'){

            roundLoser(computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase(), playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase())
            winner!=false
        } else if (computerChoice == 'rock' && playerSelection == 'paper' ||
        computerChoice == 'scissors' && playerSelection == 'rock' ||
        computerChoice == 'paper' && playerSelection == 'scissors'){

            roundWinner(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(), computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase())
            winner=true
        }

    } else{ //Choice entered is not one of the possibilities
        console.log(playerSelection + ' choice is not possible... (Rock, Paper, Scissors)')
        gameRound(getPlayerChoice(), getComputerChoice())
    }

    return winner
}

function roundWinner(playerChoice, computerChoice){ //Round Won by the Player
    return console.log('You won the Round!!! ' + playerChoice + ' beats ' + computerChoice + ' Next Round!')
}

function roundLoser(computerChoice, playerChoice){ //Round Won by the Computer
    return console.log('You lost the Round... ' + computerChoice + ' beats ' + playerChoice + ' Next Round!')
}

function roundTie(){ //Round Tie
    return console.log('Tie Round... Replay!')
}

function game(){
    var scorePlayer = 0
    var scoreComputer = 0
    const winner = ['You are the Winner!!!', 'Computer is the Winner...']

    do{
        var roundWinner = gameRound(getPlayerChoice(), getComputerChoice())
        if(roundWinner){
            scorePlayer++
        } else{
            scoreComputer++
        }
    } while(scoreComputer < 5 && scorePlayer < 5)

    if(scoreComputer == 5){
        return console.log(winner[1])
    } else{
        return console.log(winner[0])
    }
}