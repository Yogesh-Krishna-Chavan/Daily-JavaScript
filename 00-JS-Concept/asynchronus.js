//Random executiion... Not wait for anything
/*
console.log("This");

setTimeout(() => {
  console.log("asynchronus");
}, 5000);

console.log("is");
*/

//Another Method

console.log("This");

setTimeout(Fun, 5000);

function Fun() {
  console.log("asynchronus");
}

console.log("is");
