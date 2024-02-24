//https://vjudge.net/problem/AtCoder-abc161_a

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  const [x, y, z] = input.split(" ");
  let X = parseInt(x);
  let Y = parseInt(y);
  let Z = parseInt(z);

  function swap(a, b) {
    return [b, a];
  }

  [X, Y] = swap(X, Y);
  [X, Z] = swap(X, Z);

  console.log(`${X} ${Y} ${Z}`);

  readline.close();
});
