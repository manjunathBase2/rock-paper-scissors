let humanScore = 0,
  computerScore = 0;

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const textArea = document.querySelector("#commentary");

const buttons = document.querySelectorAll(".choice"); // Assume buttons have the class 'choice'
const resetBtn = document.querySelector("#reset");

function updateScore() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randInt = Math.floor(Math.random() * 3);
  return choices[randInt];
}

function playRound(humanSelection, computerSelection) {
  let commentary = `Your choice: ${humanSelection}, Computer Choice: ${computerSelection}`;

  if (humanSelection === computerSelection) {
    commentary += "\nIt is a tie!";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissor") ||
    (humanSelection === "scissor" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    humanScore++;
    commentary += `\n${humanSelection} beats ${computerSelection}. You win.`;
  } else {
    computerScore++;
    commentary += `\n${computerSelection} beats ${humanSelection}. You lose.`;
  }

  textArea.textContent = commentary;

  if (humanScore === 5) {
    textArea.textContent = "Game Over! YOU WIN!";
  }

  if (computerScore === 5) {
    textArea.textContent = "Game Over! YOU LOSE!";
  }

  updateScore();
}

// Event listener for choice buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (humanScore !== 5 && computerScore !== 5) {
      const humanSelection = button.textContent.toLowerCase();
      playRound(humanSelection, getComputerChoice());
    }
  });
});

// Event listener for reset button
resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  textArea.textContent = "";
  updateScore();
});
