//Map

var map1 = new Map([
  ["Sr. No", "1"],
  ["Name", "Yogesh"],
  ["Age", "28"],
  ["Mobile", "9405636464"],
]);

var k = map1.keys();
console.log(map1);
console.log(map1.get("Name"));

map1.set("Address", "Pune");
console.log(map1);

for (var key of k) {
  console.log(key);
}
