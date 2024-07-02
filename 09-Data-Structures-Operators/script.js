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

/*
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
*/

/*
//Map
const rest = new Map();
rest.set('name','Classico Italiano');
rest.set(1,'Firenze, Italy');
console.log(rest.set(2,'Lisbon, Portugal'));

rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true,'We are open').set(false,'We are close');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));

const arr = [1,2];
rest.set(arr,'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/

/*
const question = new Map([
  ['question','What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true, 'Correct'],
  [false,'Wrong... Try again'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for(const[key, value] of question){
  if(typeof key === 'number')
  console.log(`Answer ${key}:${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));
*/

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);

//3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'SECOND';
  console.log(`[${half}HALF] ${min}: ${event}`);
}
*/

const airline = 'TAP Air India';
/*
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log(plane.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('India'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//middle seat checking function
const checkMIddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMIddleSeat('11B');
checkMIddleSeat('23C');
checkMIddleSeat('3E');
*/

/*
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Text formating
const passenger = 'yOgesH';
const passengerLower = passenger.toLowerCase();
const passengerUpper = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerUpper);

//email compairing
const email = 'yogeshchavan113@gmail.com';
const loginEmail = '  yOgeshChAvan113@GmAil.com';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replaing 
const priceGB = '288,97$';
const priceIND = priceGB.replace('$','RS').replace(',','.');
console.log(priceIND);

const announcemnet = 'All passenger come to door num 23. and come towards door num 26';
console.log(announcemnet.replace(/door/g,'gate'));

//Booleans
const plane = 'AirBus 320Z new';
console.log(plane.includes('320'));
console.log(plane.startsWith('A'));

if(plane.startsWith('AirBus') && plane.endsWith('new')){
  console.log('Part of Airbus family');
};

const checkBaggage = function(items){
const baggage = items.toLowerCase();
if(baggage.includes('knife') || baggage.includes('gun')){
  console.log('Passenger is not allowed');
}
else{
  console.log('Welcome');
}
}

checkBaggage('I have Laptop, some food and pocket Knife for cutting fruit');
checkBaggage('I have gun for protection');
checkBaggage('Socks and Camera');


console.log('a+very+nice+string'.split('+'));
console.log('Yogesh Chavan'.split(' '));

const [firstName, lastName] = 'Yogesh Chavan'.split(' ');

//padding
const message = 'Go to gate 23';
console.log(message.padStart(25,'+'));

const maskCreditCard = function (number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(65478945165655655));

//Repeat
const message2 = 'Bad weather.... All departure delayed'
console.log(message2.repeat(10));
*/

//Coding challenge 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
});
