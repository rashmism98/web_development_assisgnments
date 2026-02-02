const input = window.prompt("Enter a number to count down from:\n");
const num = parseInt(input, 10);

if (Number.isNaN(num)) {
  window.document.write("Invalid input. Please refresh and enter a valid number.");
} else {
  for (let i = num; i >= 0; i--) {
    window.document.write(i + "<br>");
  }
}