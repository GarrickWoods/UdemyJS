'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log(`I can drive`);

const interface = 'Audio';
const private = 534;

function nameLogger(){
    console.log(`My name is Garrick`)
}

//calling, running, or invoking the function previously defined
nameLogger();

function fruitProcessor(apples, oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthyear) {
return 2037 - birthyear;
}
age1 = calcAge1(1991);


// Function expresseion
const calcAge2 = function(birthyear){
return 2037 - birthyear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


//arrow function
const calcAge3 = birthyear => 2037 - birthyear
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2022 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'DeezNutz'));
console.log(yearsUntilRetirement(1995, 'Gurrik'));


function cutFruitPieces (fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function(birthYear){
    return 2022 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    //return `${firstName} retires in ${retirement} years`;
    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`);
         return retirement;
    }else{
        console.log(`${firstName} has alreadt retired`);
        return -1;
    }
    
}
console.log(yearsUntilRetirement(1995, 'DeezNutz'));
console.log();

console.log(yearsUntilRetirement(1991, 'DeezNutz'));
console.log()


// ************* Coding Challenge 1 ************* 


// const calcAverage = (a, b, c) => (a + b + c)/3;
// console.log(calcAverage(3,4,5));

// function calculateAverage(score1, score2, score3){
//     let scoreAverage = calcAverage;
//     returnscore;
// }

//Function setup
const calcAverage = (a, b, c) => (a + b + c)/3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2*avgKoalas){
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if(avgKoalas >= 2*avgDolphins){
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    }else{
        console.log(`No Winner ${avgDolphins} vs ${avgKoalas} points`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

//Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// ************* Introduction to Arrays ************* 

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

const friends = ['Jason', 'Mike', 'Brandon'];

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends[2]);

const firstName = 'Garrick';
const Garrick = [firstName,  'Woods', 2022 - 1995, 'Engineer', friends];

console.log(Garrick);
console.log(Garrick.length);



// Exercise
const calcAge = function(birthYear) {
    return 2022-birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);



console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// ************* Array Elements (Methods) ************* 
const friends = ['Jason', 'Mike', 'Brandon'];

// Add elements
// add a member to the end of the array
const newLength = friends.push(`Jay`);

console.log(friends);
console.log(newLength);

// add a member to the beginning of the array
friends.unshift(`John`);
console.log(friends);


// Remove Elements
//remove last member of the array 
const popped = friends.pop();
console.log(friends);
console.log(popped);

//remove first member of the array 
friends.shift();
console.log(friends);

// Checks what position in the array
console.log(friends.indexOf('Jason'));
// same but with a value that isn't in the array
console.log(friends.indexOf('Bob'));

// Checks to see if the array includes values
friends.push(23);
console.log(friends.includes('Jason'));
console.log(friends.includes('Bob'));
console.log(friends.includes('Bob'));

// the method checks the specific type (number vs string)
console.log(friends.includes('23')); //not a number
console.log(friends.includes(23));  //is a number

if(friends.includes('Bruce')){
    console.log('You have a friend named Bruce');
}else {
    console.log('You do not have a friend named Bruce');
}



// ************* Coding Challenge 2 ************* 

const calcTip = function(bill){
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);


////////////// Objects //////////////////
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2021 - 1991, 
    'Teacher',
    ['Michael', 'Peter', 'Steven']
];

// object literal syntax
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2021 - 1991, 
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

// Dot notation syntax
console.log(jonas.lastName);


// Bracket notation syntax
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//Why use bracket notation syntax?
const interestedIn = prompt('What do you want to know about Joonas? Choose between firstName, lastName, age, job, friends')
console.log(jonas[interestedIn]);
if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Invalid request! Choose between firstName, lastName, age, job, and friends');
}

//adds these to the end of the object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Challenge
// Jonas has 3 friends and his best friend is named michael
console.log(`${jonas.firstName} ${jonas.lastName} has ${jonas.friends.length} friends, but his best friend is ${jonas.friends[0]}`);


////////////// Object Methods //////////////////

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991, 
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2022-birthYear;
    // }    

    // calcAge: function() {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    //Challenge
    //Jonas is a 31 Year old teacher and he has a/no Drivers License
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};

console.log(jonas.calcAge());
console.log(jonas['calcAge']());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//log the challenge
console.log(jonas.getSummary());



////////////////////////////////
// Coding Challenge 3 
////////////////////////////////

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
}
const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

let johnHigherBMI;

if(john.bmi > mark.bmi){
    console.log(`${john.firstName} ${john.lastName}'s BMI ${john.bmi} is higher than ${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi} `);
    johnHigherBMI = true;
} else {
    console.log(`${john.firstName} ${john.lastName}'s BMI ${john.bmi} is lower than ${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi} `);
    johnHigherBMI = false;
}

//second option is to test a boolean
console.log(`${john.firstName} ${john.lastName}'s BMI ${john.bmi} is ${johnHigherBMI ? 'higher' : 'lower'} than ${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi} `);



/////////////////////////////////
// For Loop Syntax
/////////////////////////////////

//method without loops
// console.log('lifting weights repettition 1');
// console.log('lifting weights repettition 2');
// console.log('lifting weights repettition 3');
// console.log('lifting weights repettition 4');
// console.log('lifting weights repettition 5');

//for loop runs while the condition is true
for(let rep = 1; rep <= 30; rep++){
    console.log(`lifting weights repettition ${rep}`);
}
for(let i=0; i<jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);

    //filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);

    
const jonas = [
    'Jonas',
    'Schmedtmann',
    2021 - 1991, 
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i=0; i<jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);

    //filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i<years.length; i++){
    ages.push(2022 - years[i]);
}

console.log(ages);

//continue or break 
console.log('--- OnlyStrings ---');
for(let i=0; i<jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- Break with Number ---')
for(let i=0; i<jonas.length; i++){
    if(typeof jonas[i] === 'number') continue;

    console.log(jonas[i], typeof jonas[i]);
}

*/

const jonas = [
    'Jonas',
    'Schmedtmann',
    2021 - 1991, 
    'Teacher',
    ['Michael', 'Peter', 'Steven']
];

// 0,1, ...., 4
// 4, 3, ..., 1

for(let i =jonas.length - 1;i>=0; i--){
    console.log(i, jonas[i]);
}



for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------ Starting Exercise ${exercise}`);
}
for(let rep = 1; rep<6; rep++){
    console.log(`Lifting weights repettition ${rep}`);
}



