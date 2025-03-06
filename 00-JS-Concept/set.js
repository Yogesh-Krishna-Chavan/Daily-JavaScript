//Array
const arr = [10, 20, 30, 40, 50, 30];
console.log(arr);
console.log(arr.length);

// Set
const s = new Set([10, 20, 30, 40, 50, 30]); //Unique values
s.add(60);
s.add("Hello");
console.log(s);

// length = s.size;
// console.log(length);

length = 0;
for (let i of s) {
  length++;
}
console.log(length);
