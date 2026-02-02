const a = parseInt(window.prompt("Enter the first integer:\n"), 10);
const b = parseInt(window.prompt("Enter the second integer:\n"), 10);

if (Number.isNaN(a) || Number.isNaN(b)) {
  window.document.write("Invalid input. Please enter two integers.");
} else if (a > b) {
  window.document.write("The larger number is: " + a);
} else if (b > a) {
  window.document.write("The larger number is: " + b);
} else {
  window.document.write("Both numbers are equal: " + a);
}
