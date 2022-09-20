const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice 
let computerChoice 
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id //tıkladığımın id sini al
    userChoiceDisplay.innerHTML = userChoice //tıkladığımı göster
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1 //rastgele bir sayı belirle

    if (randomNumber === 1){
        computerChoice = "rock"
    }
    if (randomNumber === 2){
        computerChoice = "scissors"
    }
    if (randomNumber === 3){
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice  //göster
}

function getResult(){
    //=== strict equality. does not attempt type conversion. "1"===1 False. 1===1 True.
    if (computerChoice === userChoice){
        result = "it's a draw!"
    }
    
    if (computerChoice==="rock" && userChoice==="paper"){
        result = "you win!"
    }
    if (computerChoice==="rock" && userChoice==="scissors"){
        result = "you lost!"
    }
    if (computerChoice==="paper" && userChoice==="rock"){
        result = "you lost!"
    }
    if (computerChoice==="paper" && userChoice==="scissors"){
        result = "you win!"
    }
    if (computerChoice==="scissors" && userChoice==="paper"){
        result = "you lost!"
    }
    if (computerChoice==="scissors" && userChoice==="rock"){
        result = "you win!"
    }

    resultDisplay.innerHTML = result 
}

