let startGame = () => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("click", () => {
            if (img.className) {
                playRound(img.className);

            }
        })
    })
}

let resetGame = () => {
    const pScore = document.querySelector(".playerScore")
    const cScore = document.querySelector(".computerScore")
    const tScore = document.querySelector(".tieScore")
    const pChoice = document.querySelector(".playerChoice")
    const cChoice = document.querySelector(".computerChoice")
    const result = document.querySelector(".result")

    pScore.textContent = `Player Score: 0`
    cScore.textContent = `Computer Score: 0`
    tScore.textContent = `Tie(s): 0`
    pChoice.textContent = "Player Choice:"
    cChoice.textContent = "Computer Choice:"
    result.textContent = "Result:"

    playerScore = 0;
    compScore = 0;
    tie = 0;

    document.querySelector(".modal").style.display = "none";
}

let computerPlay = () => {
    const randomNumber = Math.floor(Math.random()*3);

        if (randomNumber === 0) {
            return ("rock");
        } else if (randomNumber === 1) {
            return ("paper");
        } else {
            return ("scissor");
        }
}

let playerScore = 0;
let compScore = 0;
let tie = 0;

let scoreUpdate = () => {
    const pScore = document.querySelector(".playerScore")
    const cScore = document.querySelector(".computerScore")
    const tScore = document.querySelector(".tieScore")

    pScore.textContent = `Player Score: ${playerScore}`
    cScore.textContent = `Computer Score: ${compScore}`
    tScore.textContent = `Tie(s): ${tie}`
}

let win = () => {
    playerScore++;
    scoreUpdate ();
    const winResult = document.querySelector(".result")
    winResult.textContent = "Result: You Won!"
}

let lose = () => {
    compScore++;
    scoreUpdate ();
    const loseResult = document.querySelector(".result")
    loseResult.textContent = "Result: You Lost!"
}

let draw = () => {
    tie++;
    scoreUpdate ();
    const tieResult = document.querySelector(".result")
    tieResult.textContent = "Result: You Tied!"
}

let gameWinner  = () => {
    const winner = Math.max(playerScore, compScore);
    if(winner >= 5) {
        document.querySelector(".modal").style.display = "flex";
        return;
    }
}

let displayEnd = () => {
    if(playerScore === 5) {
        document.querySelector(".winner").textContent = `You Won! Your score was ${playerScore} and computer score was ${compScore}`;
    } else {
        document.querySelector(".winner").textContent = `You Lost! Your score was ${playerScore} and computer score was ${compScore}`;
    }
}

let playRound = (pSelection) => {
    let playerSelection = pSelection;
    let computerSelection = computerPlay();

    document.querySelector(`#${computerSelection}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`#${computerSelection}`).classList.remove("active");
    }, 1000);

    const pChoice = document.querySelector(".playerChoice")
    const cChoice = document.querySelector(".computerChoice")
    pChoice.textContent = `Player Choice: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    cChoice.textContent = `Computer Choice: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`

    switch (playerSelection + computerSelection) {
        case "rockscissor": 
        case "paperrock":
        case "scissorpaper":
            win();
            gameWinner();
            break;
        case "rockpaper":
        case "scissorrock":
        case "paperscissor":
            lose();
            gameWinner();
            break;
        case "rockrock":
        case "scissorscissor":
        case "paperpaper":
            draw();
            gameWinner();
            break;
    }
    
    if(playerScore == 5) {
        document.querySelector(".winner").innerHTML = "You Won!" + "<br/>" + "<br/>" + "Your score was " + playerScore + " and computer score was " + compScore; 
    } else {
        document.querySelector(".winner").innerHTML = "You Lost!" + "<br/>" + "<br/>" + "Your score was " + playerScore + " and computer score was " + compScore; 
    }

}

startGame();