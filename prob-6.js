//https://vjudge.net/problem/AtCoder-abc062_a

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", input => {
  const [a, b] =  input.split(" ");
  
  let A= parseInt(a);
  let B= parseInt(b);

  let g1=[1,3,5,7,8,10,12];
  let g2=[4,6,9,11];
  let g3=[2];
  
if(g1.includes(A) && g1.includes(B) || g2.includes(A) && g2.includes(B) || g3.includes(A) && g3.includes(B)){console.log("Yes");}
else {console.log("No");}

  

  readline.close();
});
