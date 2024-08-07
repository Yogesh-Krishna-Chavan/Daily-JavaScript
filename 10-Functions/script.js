'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassenger, price){
    const booking = {
        flightNum, 
        numPassenger, 
        price,
    };
console.log(booking);
bookings.push(booking);
};

createBooking('LH123');


const flight = 'LH234';
const yogesh = {
    name: 'Yogesh Chavan',
    passport: 24739479284,
}


const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 24739479284){
        alert('Checked in');
    }
    else{
        alert('Wrong passport!');
    }
};

// checkIn(flight, yogesh);
// console.log(flight);
// console.log(yogesh);


const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000000000);
}

newPassport(yogesh);
checkIn(flight,yogesh);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transform('JavaScript is the fun!', upperFirstWord);

const high5 = function () {
  console.log('🖐️');
};
document.body.addEventListener('click', high5);
['jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Yogesh');
greeterHey('Chavan');

greet('Hello')('Yogesh');

//Arrow Function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hii')('Yogesh');


const chippi = {
  airline: 'chippi',
  iataCode: 'CH',
  bookings: [],

  //Book finction
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

chippi.book(239, 'Yogesh Chavan');
chippi.book(240, 'John');

//call method
const Goa = {
  airline: 'Goa',
  iataCode: 'G',
  bookings: [],
};

const book = chippi.book;
book.call(Goa, 23, 'Raj');
console.log(Goa);
book.call(chippi, 49, 'Siraj');
console.log(chippi);

const swiss = {
  airline: 'Swiss',
  iataCode: 'Sw',
  bookings: [],
};
book.call(swiss, 545, 'Shilpa');
console.log(swiss);

//apply method
const flighData = [583, 'Hitesh'];
book.apply(swiss, flighData);
console.log(swiss);

book.call(swiss, ...flighData);

//Bind method
const bookCH = book.bind(chippi);
const bookG = book.bind(Goa);
const bookSW = book.bind(swiss);

bookCH(23, 'sameer');
bookG(452, 'smita');
bookSW(856, 'saroj');

const bookCH23 = book.bind(chippi, 569);
bookCH23('Yogiraj');
bookCH23('Hiren');

//with Event Listeners
chippi.planes = 300;
chippi.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', chippi.buyplane.bind(chippi));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    //Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(',')}`);
    }
  },
};
// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });


const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//Immediate function invoke
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will Also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
*/

/*
//closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
console.dir(booker);


//example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();
console.dir(f);

//example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait}`);
};

setTimeout(function () {
  console.log('TIMER');
}, 1000);

const perGroup = 1000;
boardPassengers(180, 3);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
