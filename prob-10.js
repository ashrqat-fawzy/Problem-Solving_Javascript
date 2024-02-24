//https://vjudge.net/problem/AtCoder-abc065_a

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  const [X, A, B] = input.split(" ").map(Number);

  if (B <= A) {
    console.log("delicious");
  } else if (B - A <= X) {
    console.log("safe");
  } else {
    console.log("dangerous");
  }

  readline.close();
});
