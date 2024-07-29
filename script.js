let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randInt = Math.floor(Math.random() * 3);
  return choices[randInt];
}

function getHumanChoice() {
  let input = prompt(
    "Choose an option (rock, paper, scissor):",
    ""
  ).toLowerCase();
  while (input !== "rock" && input !== "paper" && input !== "scissor") {
    console.log("Invalid input! Please try again.");
    input = prompt(
      "Choose an option (rock, paper, scissor):",
      ""
    ).toLowerCase();
  }
  return input;
}

function playRound(humanSelection, computerSelection) {
  console.log(
    `Your choice: ${humanSelection} || Computer Choice: ${computerSelection}`
  );

  if (humanSelection === computerSelection) return "It is a tie!";
  if (
    (humanSelection === "rock" && computerSelection === "scissor") ||
    (humanSelection === "scissor" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    humanScore++;
    return `You win! ${humanSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${humanSelection}`;
  }
}

function playGame() {
  let n = prompt("Enter the number of rounds you want to play: ", "");
  for (let i = 0; i < n; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }
  console.log(
    `Final Scores - Human: ${humanScore} || Computer: ${computerScore}`
  );
}

playGame();
