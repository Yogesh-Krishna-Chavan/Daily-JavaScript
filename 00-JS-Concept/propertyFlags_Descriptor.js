let emp = {};
emp.name = "Yogesh";

console.log(Object.getOwnPropertyDescriptor(emp, "name"));

Object.defineProperty(emp, "age", {
  value: 30,
  writable: false, //we can change
  enumerable: false,
  configurable: false,
});

//writeable
emp.age = 28;

//configurable
delete emp.age;

//enumerable
for (let prop in emp) {
  console.log(prop);
}

console.log(Object.getOwnPropertyDescriptor(emp, "age"));
