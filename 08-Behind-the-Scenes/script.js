'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `You are  a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = 'Yogesh';
calcAge(1996);



//this keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow();

const yogesh = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
yogesh.calcAge();

const chavan = {
  year: 2017,
};
chavan.calcAge = yogesh.calcAge;
chavan.calcAge();

const f = yogesh.calcAge;


var firstName = 'Chavan';

const yogesh = {
  year: 1996,
  firstName: 'Yogesh',
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  hey: () => console.log(`hey ${this.firstName}`),
};

yogesh.hey();
console.log(this.firstName);

//Argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


//Data types -> Primitives
let age = 30;
let oldAge = age;
age = 28;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Yogesh',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('Me:', me);
*/

let lastName = 'Chavan';
let oldLastName = lastName;
lastName = 'Gokhale';
console.log(lastName, oldLastName);

const poonam = {
  firstName:'poonam',
  lastName: 'rajshekhar',
  age: 27,
};

const marriedPoonam = poonam;
marriedPoonam.lastName = 'inamdar';

console.log('Before Marriage:',poonam);
console.log('After Marriage:',marriedPoonam);

//Copying object
const poonam2 = {
  firstName:'poonam',
  lastName: 'rajshekhar',
  age: 27,
  family: ['Madhu', 'Riya']
};

const poonamCopy = Object.assign({}, poonam2);
poonamCopy.lastName = 'inamdar';

console.log('Before Marriage:',poonam2);
console.log('After Marriage:',poonamCopy);