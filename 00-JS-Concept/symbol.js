let sym = Symbol("name");
console.log(sym); // Symbol(name)
console.log(typeof sym); // symbol
console.log(sym.toString()); // Symbol(name)
console.log(sym.description); // name

let sym2 = Symbol("name");
console.log(sym === sym2); // false

let id = Symbol("id");
let obj = {
  name: "Yogesh",
  age: 28,
  [id]: 255,
};
console.log(obj);
console.log(obj.name);
console.log(obj.id); // undefined
console.log(obj[id]); // 255

for (var key in obj) {
  console.log(key);
}
