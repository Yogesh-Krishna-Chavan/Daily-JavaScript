// this

var obj = {
  name: "Yogesh",
  age: 28,
  phone: 9405636464,
  address: "Pune",
  fun: function () {
    console.log(obj.name);
  },
};
obj.fun();
console.log(this);
