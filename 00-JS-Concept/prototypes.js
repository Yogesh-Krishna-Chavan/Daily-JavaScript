/*
function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}

// var obj = {
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let user = Person("Yogesh", 28);
user.greet();
console.log(user);
*/

//prototype with new keyword
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let user = new Person("Yogesh", 28);
user.greet();
console.log(user);
