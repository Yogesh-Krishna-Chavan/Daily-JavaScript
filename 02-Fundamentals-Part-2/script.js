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
*/ 
 
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