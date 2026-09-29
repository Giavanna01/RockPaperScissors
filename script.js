
console.log("Hello World")

function getComputerChoice() {
    let x = Math.random()
    if(x <= .33){
        return "rock"
    }else if (x >= .66) {
        return "paper"
    }else if(x > .33 && x < .66){
        return "scissors"
    }
}

function getHumanChoice(){
    let x = prompt("Rock, Paper, Scissors?")
    return x
}


function playRound(){
    let playerChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    let choice = (playerChoice || "").toLowerCase()


    if(choice === "rock" && computerChoice === "rock"){
        console.log("A tie!")
        return "tie"
    }else if(choice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock")   
        return "lose"
    }else if(choice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors")
        return "win"
    }else if(choice === "paper" && computerChoice === "paper"){
        console.log("A tie!")
        return "tie"
    }else if(choice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper")   
        return "lose"
    }else if(choice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock")
        return "win"
    }else if(choice === "scissors" && computerChoice === "scissors"){
        console.log("A tie!")
        return "tie"
    }else if(choice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors")   
        return "lose"
    }else if(choice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper")
        return "win"
    }else{
        console.log("Invalid, try again!")
        return "invalid"
    }

}

function bestof5(){
    let humanScore = 0
    let computerScore = 0 
    for(let x = 0; x<5; x++){
        let game = playRound(humanScore, computerScore)
        if (game === "win"){
            humanScore += 1
        } else if (game === "lose") {
            computerScore += 1
        } else if (game ==="invalid"){
            x -= 1
        }
    }
    if(humanScore>computerScore){
        console.log(`You win! Score: ${humanScore} to ${computerScore}`)
    }else{
        console.log(`You lose! Score: ${humanScore} to ${computerScore}`)
    }
}

bestof5()

