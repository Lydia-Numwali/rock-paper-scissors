let userScore = 0;
let computerScore = 0;
const maxScore = 5;

const choices = document.querySelectorAll(".choice");
const playButton = document.getElementById("play");
const resultText = document.getElementById("result");
const userScoreText = document.getElementById("user-score");
const computerScoreText = document.getElementById("computer-score");

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return computerChoices[randomIndex];
}

function convertToImageFilename(choice) {
  return choice + ".jpg";
}

// Function to update the scores on the UI
function updateScore() {
  userScoreText.textContent = userScore;
  computerScoreText.textContent = computerScore;
}

// Function to check who wins a single round
function checkWin(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

// Function to display the result of a single round
function showResult(result) {
  resultText.textContent = result;
  updateScore();

  if (userScore === maxScore) {
    resultText.textContent = "Congratulations! You are the winner!";
    disableChoices();
  } else if (computerScore === maxScore) {
    resultText.textContent = "Computer wins the game!";
    disableChoices();
  }
}

// Function to disable user choices after the game is over
function disableChoices() {
  choices.forEach(choice => {
    choice.removeEventListener("click", playRound);
    choice.style.pointerEvents = "none";
  });
  playButton.removeEventListener("click", playRound);
  playButton.style.pointerEvents = "none";
}

// Function to handle a single round of the game
// Remove the lines that create and append images for user and computer choices in the playRound function
function playRound(event) {
  const userChoice = event.target.id;
  const computerChoice = getComputerChoice();
  
  const result = checkWin(userChoice, computerChoice);
  showResult(result);
}
function showResult(result) {
  resultText.textContent = result;
  updateScore();

  if (userScore === maxScore) {
    resultText.textContent = "Congratulations! You are the winner!";
    disableChoices();
  } else if (computerScore === maxScore) {
    resultText.textContent = "Computer wins the game!";
    disableChoices();
  }
}

// Function to reset the game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  resultText.textContent = "";
  updateScore();
  choices.forEach(choice => {
    choice.addEventListener("click", playRound);
    choice.style.pointerEvents = "auto";
  });
  playButton.addEventListener("click", playRound);
  playButton.style.pointerEvents = "auto";
}

// Event listener for the play button to start the game
playButton.addEventListener("click", playRound);

// Initialize the scores
updateScore();
