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
*/           

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transform = function(str, fn){

console.log(`Original string: ${str}`);
console.log(`Transformed string: ${fn(str)}`);

console.log(`Transformed by: ${fn.name}`);
};
transform('JavaScript is the fun!', upperFirstWord);

const high5 = function() {
    console.log('🖐️');
};
document.body.addEventListener('click',high5);
['jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Yogesh');
greeterHey('Chavan');

greet('Hello')('Yogesh');