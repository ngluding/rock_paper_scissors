let computerPlay = () => {
    const randomNumber = Math.floor(Math.random()*3);

        if (randomNumber === 0) {
            return ("rock");
        } else if (randomNumber === 1) {
            return ("paper");
        } else {
            return ("scisscor");
        }
}

let playerPlay = () => {
    let userInput = prompt("Choose rock, paper or scisscor:");
    if (userInput === null) {
        alert("Ok try next time then :)")
    }
    userInput = userInput.toLowerCase();
    return userInput;
}

let playerScore = 0;
let compScore = 0;
let tie = 0;

let win = () => {
    playerScore++;
    console.log("You won!");
    console.log(`Your score is ${playerScore}, computer score is ${compScore} and there is ${tie} ties`);
    console.log("------------------------------------------------------------")
}

let lose = () => {
    compScore++;
    console.log("You lost!");
    console.log(`Your score is ${playerScore}, computer score is ${compScore} and there is ${tie} ties`);
    console.log("------------------------------------------------------------")
}

let draw = () => {
    tie++;
    console.log("It's a draw");
    console.log(`Your score is ${playerScore}, computer score is ${compScore} and there is ${tie} ties`);
    console.log("------------------------------------------------------------")
}

let roundResults = () => {
    console.log(`You selected: ${playerPlay()}`);
    console.log(`Computer selected: ${computerPlay()}`);

}

let gameWinner  = () => {
    if (playerScore > compScore) {
        console.log(`You won the game! Your score was ${playerScore} and computer score was ${compScore}`);
    } else if (compScore > playerScore) {
        console.log(`You lost the game! Your score was ${playerScore} and computer score was ${compScore}`);
    } else {
        console.log(`It was a tie since both you and computer had the same score of ${playerScore}`);
    }
}

let playRound = () => {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    let roundResults = () => {
    console.log(`You selected: ${playerSelection}`);
    console.log(`Computer selected: ${computerSelection}`);
    }

    switch (playerSelection + computerSelection) {
        case "rockscisscor": 
        case "paperrock":
        case "scissorpaper":
            roundResults();
            win();
            break;
        case "rockpaper":
        case "scissorrock":
        case "paperscissor":
            roundResults();
            lose();
            break;
        case "rockrock":
        case "scissorscissor":
        case "paperpaper":
            roundResults();
            draw();
            break;
    }
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    gameWinner();
}

game();

