// Rock, Paper, Scissors

// 1) User choice
let userChoice = window.prompt("Choose rock, paper, or scissors:");

// Handle cancel or empty input
if (userChoice === null) {
  window.document.write("Game cancelled.<br>");
} else {
  userChoice = userChoice.trim().toLowerCase();

  // Validate user input
  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(userChoice)) {
    window.document.write("Invalid choice. Please refresh and enter: rock, paper, or scissors.<br>");
  } else {
    // 2) Computer choice (random 1-3)
    const rand = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
    let computerChoice = "";

    if (rand === 1) computerChoice = "rock";
    else if (rand === 2) computerChoice = "paper";
    else computerChoice = "scissors";

    // 3) Determine winner
    let resultMessage = "";

    if (userChoice === computerChoice) {
      resultMessage = "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      resultMessage = "You win!";
    } else {
      resultMessage = "Computer wins!";
    }

    // Output to page
    window.document.write(`You chose: ${userChoice}<br>`);
    window.document.write(`Computer chose: ${computerChoice}<br>`);
    window.document.write(`<strong>${resultMessage}</strong><br>`);

    // Also show alert with winner (per instructions)
    window.alert(resultMessage);
  }
}
