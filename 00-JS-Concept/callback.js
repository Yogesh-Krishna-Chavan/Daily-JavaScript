//One function calling to other function

function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

function fun(value) {
  console.log(value);
}

add(5, 6, fun); //11
