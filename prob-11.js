//https://vjudge.net/problem/AtCoder-abc114_a

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  let x = parseInt(input);

  function show(x) {
    if (x === 3 || x === 5 || x === 7) {
      return true;
    }
    return false;
  }

  if (show(x)) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  readline.close();
});
