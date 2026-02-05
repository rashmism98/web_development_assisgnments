function halfNumber(num) {
  const result = num / 2;
  window.document.write(`Half of ${num} is ${result}.<br>`);
  return result;
}

function squareNumber(num) {
  const result = num * num;
  window.document.write(`The result of squaring the number ${num} is ${result}.<br>`);
  return result;
}

function percentOf(num1, num2) {
  const result = (num1 / num2) * 100;
  window.document.write(`${num1} is ${result}% of ${num2}.<br>`);
  return result;
}

function findModulus(num1, num2) {
  const result = num1 % num2;
  window.document.write(`${result} is the modulus of ${num1} and ${num2}.<br>`);
  return result;
}

// Example calls:
halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(4, 10);
