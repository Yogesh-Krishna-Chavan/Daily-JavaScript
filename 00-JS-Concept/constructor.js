function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

// var person = new User("Yogesh");
var person = User("Yogesh");

console.log(person.name); // Yogesh
