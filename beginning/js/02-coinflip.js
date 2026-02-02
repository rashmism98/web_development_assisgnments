

const coinFlip = Math.floor(Math.random() * 2); 
const choiceRaw = window.prompt("Heads or Tails?\n");
const choice = (choiceRaw || "").trim().toLowerCase();

const isHeads = (coinFlip === 0); 
const flipText = isHeads ? "heads" : "tails";

if (choice !== "heads" && choice !== "tails") {
  window.document.write('Invalid choice. Please refresh and type "Heads" or "Tails".');
} else if (isHeads && choice === "heads") {
  window.document.write("The flip was heads and you chose heads...you win!");
} else if (isHeads && choice === "tails") {
  window.document.write("The flip was heads but you chose tails...you lose!");
} else if (!isHeads && choice === "heads") {
  window.document.write("The flip was tails but you chose heads...you lose!");
} else {
  window.document.write("The flip was tails and you chose tails...you win!");
}
