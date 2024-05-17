'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive 😊');

// const interface = 'Audio';
const private = 6;


function logger() {
    console.log('My name is Yogesh');
}

//calling / running / invoking function
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// const appleJuice = fruitProcessor(5,6);
// console.log(appleJuice);
console.log(fruitProcessor(5,6));


function calcAge(birthYear){
    return 2030 - birthYear;
}
const age1 = calcAge(1996);
console.log(age1);


const calcAge2 = function (birthYear){
    return 2030 - birthYear;
}
const age2 = calcAge2(1998);
console.log(age2); 


//Arrow Function

const calcAge = birthYear => 2037 - birthYear;
const age1 = calcAge(1996);
console.log(age1);

const yearUntilRetired = (birthYear,firstName) => {
    const age2 = 2037 - birthYear;
    const retirement = 65 - age2;
    // return retirement;
    return `${firstName} retire in ${retirement} years`;

}

console.log(yearUntilRetired(1996, 'Yogesh'));

function cutFruitpieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitpieces(apples);
    const orangePieces = cutFruitpieces(oranges);

    const juice = `juice with ${apples} apple and ${oranges} orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));  

const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins,avgKoalas) => {
    if(avgDolphins>=2 * avgKoalas){
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    }
    else if(avgDolphins * 2 <= avgKoalas){
        console.log(`Koalas wins (${avgKoalas} vs ${avgKoalas})`);
    }
    else{
        console.log(`No team wins`);
    }
}

const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);
checkWinner(scoreDolphins1, scoreKoalas1);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);
checkWinner(scoreDolphins2, scoreKoalas2);


const frnds = ['Ram', 'Sham', 'Tejas'];
console.log(frnds);
console.log(frnds[1]);
console.log(frnds.length);
console.log(frnds[frnds.length-1]);
frnds[2] = 'Jay';
console.log(frnds)

const yesrs = new Array(2010,2011,2012,2013);

const firstName = 'Yogesh';
const lastName = 'Chavan';
const yogeshChavan = [firstName, lastName, 1996];
console.log(yogeshChavan);


//Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const year = [1990, 1996, 2002, 2008, 2014];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
console.log(age1,age2,age3);

const age = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2])];
console.log(age);

 
const frnds = ['Ram', 'Sham', 'Tejas'];

//Add elemenet
const newLength = frnds.push('jay');
console.log(frnds);
console.log(newLength);

frnds.unshift('John');
console.log(frnds);

//Remove element
frnds.pop();
const popped = frnds.pop();
console.log(popped);
console.log(frnds);

frnds.shift('John');
console.log(frnds);

//index
console.log(frnds.indexOf('Sham'));
console.log(frnds.indexOf('John'));

//include
console.log(frnds.includes('Sham'));
console.log(frnds.includes('John'));
frnds.push(23);
console.log(frnds.includes('23'));
console.log(frnds.includes(23));

if(frnds.includes('Ram')){
    console.log('You have frnd called Ram');
}


const yogeshArray = ['Yogesh', 'Chavan', '1996', 'Devloper', ['Ram', 'Sham', 'Tejas']];

const yogesh = {
    firstName: 'Yogesh',
    lastName: 'Chavan',
    age: 1996,
    job: 'Devloper',
    frnds: ['Ram', 'Sham', 'Tejas']
};
console.log(yogesh);
console.log(yogesh.frnds);
console.log(yogesh['frnds']);

const nameKey = 'Name';
console.log(yogesh['first'+ nameKey]);
console.log(yogesh['last'+ nameKey]);

const interstedIn= prompt('What do you want? choose between firstName, lastName, age, job & frnds');

if(yogesh[interstedIn]){
    console.log(yogesh[interstedIn]);
}else{
    console.log('Wrong request');
}

yogesh.location = 'Malvan';
console.log(yogesh);

console.log(`${yogesh.firstName} has ${yogesh.frnds.length}, and his best frnd is called ${yogesh.frnds[0]}`);
 

const yogesh = {
    firstName: 'Yogesh',
    lastName: 'Chavan',
    birthYear: 1996,
    job: 'Devloper',
    frnds: ['Ram', 'Sham', 'Tejas'],
    hasDriversLicense: true,

    // calcAge: function(){
    //     console.log(this);
    //     return 2024 -this.birthYear;
    // }

    calcAge: function(){
        this.age =  2024 -this.birthYear;
        return this.age;
    },

    getsSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(yogesh.calcAge());
// console.log(yogesh['calcAge'](1996));

console.log(yogesh.getsSummary());




const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
    this.bmi = this.mass / this.height **2;
    return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function(){
    this.bmi = this.mass / this.height **2;
    return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
}
else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
}
else{
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}

for(let rep = 1; rep<=10; rep++){
    console.log(`Lifting weight repitations 🏋️‍♂️ ${rep}`);
}


const yogesh = ['Yogesh', 'Chavan', '1996', 'Devloper', ['Ram', 'Sham', 'Tejas'],true];

const types = [];

for(let i=0; i<yogesh.length; i++){
    console.log(yogesh[i], typeof yogesh[i]);

    // types[i] = typeof yogesh[i];
    types.push(typeof yogesh[i]);
}

console.log(types);

const years = [1996,1999,2002,2005];
const ages= [];
for(let i=0; i<years.length; i++){
    ages.push(2024-years[i]);
}
console.log(ages);


const yogesh = ['Yogesh', 'Chavan', '1996', 'Devloper', ['Ram', 'Sham', 'Tejas'],true];

for(let i = yogesh.length -1; i>= 0; i--){
    console.log(i, yogesh[i]);
}

for(let exercise = 1; exercise <=3; exercise++){
    console.log(`Start exercise ${exercise}`);

    for (let rep =1; rep<=6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight 🏋️‍♂️ repitition ${rep}`);
    }
}


for (let rep =1; rep<=6; rep++){
    console.log(`Lifting weight 🏋️‍♂️ repitition ${rep}`);
}
let rep = 1;
while(rep <= 10){
    console.log(`Lifting weight 🏋️‍♂️ repitition ${rep}`);
    rep++;
} 
*/

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log('Loop is end...');
    }
}