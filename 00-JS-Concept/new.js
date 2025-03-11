//new

function fun() {
  let fname = "Yogesh";
  this.fname = fname;
}

// console.log(new fun());

var obj = new fun();
console.log(obj.fname);
