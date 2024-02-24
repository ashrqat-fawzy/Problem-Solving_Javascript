//https://vjudge.net/problem/AtCoder-abc064_a

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  const [a, b, c] =  input.split(" ");

  let h=parseInt(a+b+c);
 if(h % 4 === 0){console.log("YES");}
 else console.log("NO");
  

  readline.close();
});
