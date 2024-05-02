/*
let js = "amazing";
//if (js== "amazing") alert("JavaScript is Fun...!");

//40 + 8 - 30 - 2;
console.log(40 + 8 - 30 - 2);
console.log("Yogesh");
console.log(23);

let firstName = "Yogesh";
console.log(firstName);

let Person = "Yogesh";
let PI = 3.1415;

//Assignment on Values and Variables
let country = "India";
let continent = "XYZ";
let population = 50000;

console.log(country);
console.log(continent);
console.log(population);

true;
console.log(true);

let javaScriptIsFun = false;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Yogesh"); 

javaScriptIsFun = "Yes...!"

//Assignment on Data Types
const isIsland = true;

let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Operaters

const now = 2023;
const ageYogesh = now - 1996;
console.log(ageYogesh);

let firstName = 'Yogesh';
let lastName = 'Chavan';
console.log(firstName+ ' ' +lastName);

//Assignment Operator
let x = 10 + 5;
x += 10; //x = x + 10
x -= 5; //x = x - 5
x *= 2; //x = x * 2
x++;
x--;
console.log(x);
console.log(ageYogesh >= 18);
console.log(now-2000 > now-2004);

let n = '1' + 1;
n = n -1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(''));

const money = 10;
if(money){
    console.log("Don't spend it all");
} else{
    console.log('You should get a job');
}
const age = 18;
if(age == '18')
    console.log('You just became adult loose');
if(age === '18')
    console.log('You just became adult strict');

    const favt = Number(prompt("Whats your favt number"))
    console.log(favt);
    console.log(typeof favt);

if (favt === 23)
console.log('23 is amazing number');
else if(favt === 7)
console.log('7 is also ok');
else
console.log('Number is not 7 nor 23');

if (favt !== 23)
console.log('Why not 23?');


const driverLicense = true; //A
const goodVision = true; //B

console.log(driverLicense && goodVision);
console.log(driverLicense || goodVision);
console.log(!goodVision);

const shouldDrive = driverLicense && goodVision;
if(shouldDrive)
console.log('Sarah is able to drive');
else 
console.log('someone drive 🚙');


const day = 'saturday';
switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to Gym');
        break;
    case 'tuesday':
        console.log('Dance');
        break;
    case 'wednesday':
        console.log('Cricket');
        break;
    case 'thusday':
        console.log('Sleep');
        break;
    case 'friday':
        console.log('Fly');
        break;
    case 'saturday':
        console.log('Jump');
        break;
    case 'sunday':
        console.log('Run');
        break;
    default:
        console.log('😂');
}


const age = 15;
age >= 18 ? console.log('I like to drink wine 🍺') : console.log('I like to drink water 🧊');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
console.log(`I like to drink ${age>=18 ? 'wine' : 'water'}`);
*/

const bill = 275;
const tip1 = bill * (15/100);
const tip2 = bill * (20/100);
const value1 = bill + tip1;
const value2 = bill + tip2; 


bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${tip1}, and the total value ${value1}`) : console.log(`The bill was ${bill}, the tip was ${tip2}, and the total value ${value2}`);