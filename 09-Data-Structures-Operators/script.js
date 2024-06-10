'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

/*
const ingredients = [
  prompt("let's make pasta...! ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

//Objects
restaurant.orderPasta(...ingredients);
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Yogesh' };
console.log(newRestaurant);



restaurant.orderDelivery({
  time: '22:30',
  address: 'Pune',
  mainIndex: 2,
  starterIndex: 2,
});


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secodary] = restaurant.categories;
console.log(main, secodary);

//Switching variables

// const temp = main;
// main = secodary;
// secodary = temp;
// console.log(main,secodary);

[main, secodary] = [secodary, main];
console.log(main, secodary);

//recieve 2 values from fuction
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p, q = 1, r = 2] = [8, 9];
console.log(p, q, r);


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starer = [] } = restaurant;
console.log(menu, starer);

//Mutate varibales
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Puran-poli'];
console.log(newMenu);

//copy array
const mainenuCopy = [...restaurant.mainMenu];

//join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays,strings, maps, sets, Not objects
const str = 'Yogesh';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);
*/

//spread
const arr = [1, 2, ...[3, 4]];

//rest
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Pizza, , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherfood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);

const x = [23, 5, 7];
add(...x);
