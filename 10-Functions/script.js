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
*/

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
