for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    window.document.write("Marco! Polo!<br>");
  } else if (i % 3 === 0) {
    window.document.write("Marco!<br>");
  } else if (i % 5 === 0) {
    window.document.write("Polo!<br>");
  } else {
    window.document.write(i + "<br>");
  }
}