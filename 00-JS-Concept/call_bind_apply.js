//call bind apply

function fun(age) {
  console.log(this.fName, age);
  //   console.log(obj2.fName);
}

var obj1 = {
  fName: "Yogesh",
};

var obj2 = {
  fName: "Chavan",
};

// obj1.fun.call(obj2);
// fun.call(obj1, 28);
// fun.apply(obj1, [28]);
var a = fun.bind(obj1, [28]);
console.log(typeof a);
