//https://vjudge.net/problem/AtCoder-abc216_a

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  const [X, Y] = input.split(".");
  const decimalDigit = parseInt(Y);
  
  let output = "";
  if (decimalDigit >= 0 && decimalDigit <= 2) {
    output = `${X}-`;
  } else if (decimalDigit >= 3 && decimalDigit <= 6) {
    output = X;
  } else if (decimalDigit >= 7 && decimalDigit <= 9) {
    output = `${X}+`;
  }
  
  console.log(output);
  readline.close();
});
