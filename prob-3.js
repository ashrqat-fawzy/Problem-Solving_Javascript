// https://vjudge.net/problem/Gym-350741A

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  const [a, b] =  input.split(" ");
  let A= parseInt(a);
  let B= parseInt(b);
  
console.log(A*B);
  readline.close();
});
