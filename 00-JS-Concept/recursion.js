//recursion

// print number from 1 to 10 by normal for loop
/*
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/

//By Recursion
function printNumberByRecursion(n) {
  if (n <= 10) {
    console.log(n);
    printNumberByRecursion(n + 1);
  }
}
printNumberByRecursion(1);

//Factorial by Recursion
// 5! = 5*4*3*2*1 = 120

function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(5));

