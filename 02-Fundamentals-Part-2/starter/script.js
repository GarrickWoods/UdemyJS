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
    return 2022 - birthyear;
}

const yearsUntilRetirement = function(birthyear, firstName){
    const age = calcAge(birthyear);
    const retirement = 65 - age;
    //return `${firstName} retires in ${retirement} years`;
    if(retirement>0){
         return retirement;
    }else{
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1991, 'DeezNutz'));
console.log()




// ************* Coding Challenge 1 ************* 

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

*/

// ************* Coding Challenge 2 ************* 

const billAmount = prompt('How much is the bill?');
const tipPercent = billAmount >= 50 && billAmount <= 300 ? 0.15 : 0.20;
const totalTip = tipPercent*billAmount;

//not yet working
console.log(`The tip should be $${totalTip.toFixed(2)} , which should be ${(tipPercent*100).toFixed(0)}% of the total bill, bringing the total to ${totalTip+billAmount}`);

// working code:
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);





