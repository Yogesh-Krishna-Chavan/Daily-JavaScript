// __Proto__

// __proto__ is a getter/setter for the [[Prototype]] of the object.
// It is a non-standard way of accessing an object's prototype.
// It is equivalent to Object.getPrototypeOf() and Object.setPrototypeOf().
// It is not recommended to use __proto__ as it is considered deprecated.
// It is a legacy feature and should be avoided.

var obj1 = {
  fName: "Yogesh",
};

var obj2 = {
  lName: "Chavan",
};

// obj2.__proto__ = obj1;
obj1.__proto__ = obj2;

// console.log(obj2.fName);
console.log(obj1.lName);

obj2 = Object.create(obj1);
console.log(obj2); //referencing obj1
