'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced object
  openingHours,

  order(starterIndex, mainIndex) {
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
//Optional chaining
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day}, we open at ${open}`);
}

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//Property value

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);
//key & value
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const [i,] of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);


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
*/

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//1.
const [players1,players2] = game.players;
console.log(players1,players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Ram', 'Sham', 'Jeet'];
console.log(players1Final);

//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1,team2,draw);

//6
const printGoals = function(...players){
  console.log(`${players.length} goals were scored`)
};
printGoals('JHG', 'QWE', 'XYZ');
printGoals('JHG', 'QWE', 'XYZ', 'ASD');

printGoals(...game.score);

//7
team1 < team2 && console.log('Team1 is more likely to win');
team2 < team1 && console.log('Team2 is more likely to win');
*/

/*
//Challenge 2
//1
for(const [i,players] of game.scored.entries())
console.log(`Goal ${i +1}: ${players}`);

// 2
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds)
average += odd;
average /= odds.length;
console.log(average);

//3
for(const [team,odd] of Object.entries(game.odds)) {
   const teamStr = team === 'x'? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

//Set 

const orderSet = new Set(['Pasta', 'Pista', 'Pizza', 'Rissoto', 'Chicken', 'Pizza']);
console.log(orderSet);

console.log(new Set('Yogesh'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Puranpoli'));
orderSet.add('Garlic bread');
orderSet.delete('Rissoto');
console.log(orderSet);

for(const order of orderSet)
console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'Manager', 'Cook'];
console.log(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);