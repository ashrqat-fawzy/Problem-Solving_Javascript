//https://vjudge.net/problem/AtCoder-abc207_a

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  const [a, b, c] =  input.split(" ");
  
  let A= parseInt(a);
  let B= parseInt(b);
  let C= parseInt(c);
  let v = [A,B,C];
  v.sort();
  console.log((v[2]) + (v[1]));
  readline.close();
});
