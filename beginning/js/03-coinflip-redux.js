

let coinFlip; 

for (let i = 0; i < 10; i++) {
  coinFlip = Math.floor(Math.random() * 2); // 0 or 1

  if (coinFlip === 0) {
    window.document.write("Heads<br>");
  } else {
    window.document.write("Tails<br>");
  }
}
