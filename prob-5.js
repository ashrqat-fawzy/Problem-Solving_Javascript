//https://vjudge.net/problem/AtCoder-abc214_a

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  // const [a, b] =  input.split(" ");
  
  let A= parseInt(input);
  // let B= parseInt(b);
  
if(A >= 1 && A <=  125){console.log('4');}
else if (A >= 126 && A <= 211){console.log('6');}
else if (A >= 212 && A <= 214){console.log('8');}
  

  readline.close();
});
