const rock = document.querySelector(".rock_icon");
const paper = document.querySelector(".paper_icon");
const scissors = document.querySelector(".scirrors_icon");
const result = document.querySelector(".result h1");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const youChoose = document.querySelector(".youChoose")
const computerChoose = document.querySelector(".computerChoose")
let cScore = 0;
let pScore = 0;
function playerSelection() {
    rock.addEventListener("click", () => {
        playRound("rock");
    });
    paper.addEventListener("click", () => {
        playRound("paper");
    });
    scissors.addEventListener("click", () => {
        playRound("scissors");
    });
}

function playRound(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const randomChoise = choices[Math.floor(Math.random() * choices.length)];
    if (playerSelection === "rock" && randomChoise === "paper") {
        result.innerHTML = "You Lose ! ";
        youChoose.innerHTML = "ROCK";
        computerChoose.innerHTML = "PAPER";
        cScore += 1;
        computerScore.innerHTML = cScore;
    } else if (playerSelection === "paper" && randomChoise === "scissors") {
        result.innerHTML = "You Lose ! ";
        youChoose.innerHTML = "PAPER";
        computerChoose.innerHTML = "SCISSORS";
        cScore += 1;
        computerScore.innerHTML = cScore;
    } else if (playerSelection === "scissors" && randomChoise === "rock") {
        result.innerHTML = "You Lose ! ";
        youChoose.innerHTML = "SCISSORS";
        computerChoose.innerHTML = "ROCK";
        cScore += 1;
        computerScore.innerHTML = cScore;
    } else if (playerSelection === "rock" && randomChoise === "scissors") {
        result.innerHTML = `You Win !`;
        youChoose.innerHTML = "ROCK";
        computerChoose.innerHTML = "SCISSORS";
        pScore += 1;
        playerScore.innerHTML = pScore;
    } else if (playerSelection === "paper" && randomChoise === "rock") {
        result.innerHTML = `You Win !`;
        youChoose.innerHTML = "PAPER";
        computerChoose.innerHTML = "ROCK";
        pScore += 1;
        playerScore.innerHTML = pScore;
    } else if (playerSelection === "scissors" && randomChoise === "paper") {
        result.innerHTML = `You Win !`;
        youChoose.innerHTML = "SCISSORS";
        computerChoose.innerHTML = "PAPER";
        pScore += 1;
        playerScore.innerHTML = pScore;
    }

    else if (playerSelection === "scissors" && randomChoise === "scissors") {
        result.innerHTML = `Draw !`;
        youChoose.innerHTML = "SCISSIRS";
        computerChoose.innerHTML = "SCISSORS";
    }
    else if (playerSelection === "rock" && randomChoise === "rock") {
        result.innerHTML = `Draw !`;
        youChoose.innerHTML = "ROCK";
        computerChoose.innerHTML = "ROCK";
    }
    else if (playerSelection === "PAPER" && randomChoise === "PAPER") {
        result.innerHTML = `Draw !`;
        youChoose.innerHTML = "PAPER";
        computerChoose.innerHTML = "PAPER";
    }
}

playerSelection();