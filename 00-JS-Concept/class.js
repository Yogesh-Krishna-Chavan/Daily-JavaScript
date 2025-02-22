/*
//Prototype based inheritance converted to class based inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let user = new Person("Yogesh", 28);
user.greet(); // Hello, my name is Yogesh
*/

//Class
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hello," + this.name);
  }
}

let user1 = new User("Yogesh");
user1.sayHi();

let user2 = new User("Rahul");
user2.sayHi();

console.log(typeof User);
console.log(User.prototype.sayHi);
