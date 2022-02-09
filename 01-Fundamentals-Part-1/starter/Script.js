
/*
 let JS = 'amazing';
if (JS === 'amazing') alert('Suck It');
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

const birthyear = 1995;
let century;

if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(birthyear);
console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.75;

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn ** 2);

let markHigherBMI = BMIMark > BMIJohn;
console.log("Mark's BMI: ", BMIMark.toFixed(2));
console.log("John's BMI: ", BMIJohn.toFixed(2));
console.log("Mark Higher BMI?", markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`It is ${markHigherBMI} that Mark is a Fatass`);
    console.log(`Mark's BMI is ${BMIMark.toFixed(2)}. John's is ${BMIJohn.toFixed(2)}.`);
} else {
    console.log(`It is ${markHigherBMI} that Mark is a Fatass`);
    console.log(`Mark's BMI is ${BMIMark.toFixed(2)}. John's is ${BMIJohn.toFixed(2)}.`);
}

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');

let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend any money");
} else {
    console.log("You should get a job!");
}

let height = 1;
if (height) {
    console.log(`yay! Height is defined as ${height} Meters`)
} else {
    console.log('Oh no! Height is undefined!')
}


let howManyHoursTotal = (5 + 4 + 2 + 1 + 4 + 3 + 5.5 + 2.5 + 6 + 3 + 5 + 4 + 4 + 5 + 4 + 8 + 1);
console.log(`It will take me at least ${howManyHoursTotal.toFixed(1)} Hours to complete this course.`);

let videoWatchSpeed = 1.25;
let howManyHoursPerDay = 3;
let howManyDays = (howManyHoursTotal / howManyHoursPerDay) / videoWatchSpeed;
let howManyWeeks = howManyDays / 7;
console.log(`Which is ${howManyDays.toFixed(1)} days, or ${howManyWeeks.toFixed(1)} weeks at ${howManyHoursPerDay.toFixed(1)} hours per day, at video watch speed of ${videoWatchSpeed.toFixed(2)}.`);


const age = 18;
if(age === 18) console.log(`you just became an adult! (strict)`);
if(age == 18) console.log(`you just became an adult! (loose)`);
//always default to the "===" or strict one


const favorite = Number(prompt("What's your favorite number?"));
console.log(typeof favorite, favorite);

if (favorite === 23){
    console.log(`cool! 23 is an amazing number!`);
}else if(favorite === 7){
    console.log(`7 is a gay ass number`);
}else{
    console.log(`at least it's not 7`);
}

if(favorite !== 23) console.log(`why not 23?`);


const hasDriversLicense = true; // a
const hasGoodVision = false; // b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log(`sarah is able to drive`)
// }else{
//     console.log(`someone else should drive...`)
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if(shouldDrive){
    console.log(`sarah is able to drive`)
}else{
    console.log(`someone else should drive...`)
}


// Coding Challenge 3
//Test 1:
let dolphinsScoreGame1 = 96;
let dolphinsScoreGame2 = 108;
let dolphinsScoreGame3 = 89;

let koalasScoreGame1 = 88;
let koalasScoreGame2 = 91;
let koalasScoreGame3 = 110;

let dolphinsAvg = (dolphinsScoreGame1 + dolphinsScoreGame2 + dolphinsScoreGame3)/3;
let koalasAvg = (koalasScoreGame1 + koalasScoreGame2 + koalasScoreGame3)/3;

if(dolphinsAvg > koalasAvg){
    console.log(`Test 1: dolphins win with an average score of ${dolphinsAvg.toFixed(1)}`);
}else if(dolphinsAvg < koalasAvg){
    console.log(`Test 1: koalas win with an average score of ${koalasAvg.toFixed(1)}`);
}else{ 
    console.log(`Test 1: they tied with an average score of ${koalasAvg.toFixed(1)}`);
}

//Test 2:
 dolphinsScoreGame1 = 97;
 dolphinsScoreGame2 = 112;
 dolphinsScoreGame3 = 101;

 koalasScoreGame1 = 109;
 koalasScoreGame2 = 95;
 koalasScoreGame3 = 123;

 dolphinsAvg = (dolphinsScoreGame1 + dolphinsScoreGame2 + dolphinsScoreGame3)/3;
 koalasAvg = (koalasScoreGame1 + koalasScoreGame2 + koalasScoreGame3)/3;

if(dolphinsAvg > koalasAvg){
    console.log(`Test 2: dolphins win with an average score of ${dolphinsAvg.toFixed(1)}`);
}else if(dolphinsAvg < koalasAvg){
    console.log(`Test 2: koalas win with an average score of ${koalasAvg.toFixed(1)}`);
}else{
    console.log(`Test 2: they tied with an average score of ${koalasAvg.toFixed(1)}`);
}


//Test 3:
dolphinsScoreGame1 = 97;
dolphinsScoreGame2 = 112;
dolphinsScoreGame3 = 101;

koalasScoreGame1 = 109;
koalasScoreGame2 = 95;
koalasScoreGame3 = 106;

dolphinsAvg = (dolphinsScoreGame1 + dolphinsScoreGame2 + dolphinsScoreGame3)/3;
koalasAvg = (koalasScoreGame1 + koalasScoreGame2 + koalasScoreGame3)/3;

if(dolphinsAvg > koalasAvg){
   console.log(`Test 3: dolphins win with an average score of ${dolphinsAvg.toFixed(1)}`);
}else if(dolphinsAvg < koalasAvg){
   console.log(`Test 3: koalas win with an average score of ${koalasAvg.toFixed(1)}`);
}else{
   console.log(`Test 3: they tied with an average score of ${koalasAvg.toFixed(1)}`);
}


let day = prompt(`What is your favorite day?`);
switch(day){
    case 'mon':
        day = 'monday'
        break;
    case 'tues':
        day = 'tuesday'
        break;
    case 'wed':
        day = 'wednesday'
        break;
    case 'thurs':
        day = 'thursday'
        break;
    case 'fri':
        day = 'friday'
        break;   
    case 'sat':
        day = 'saturday'
        break;
    case 'sun':
        day = 'sunday'
        break;     
}

switch(day){
    case 'monday':
        console.log(`It's ${day} my dudes`);
        console.log('cry deeply');
        break;
    case 'tuesday':
        console.log(`It's ${day} my dudes`);
        console.log('cry deeply');
        break;
    case 'wednesday':
        console.log(`It's ${day} my dudes`);
        console.log('cry deeply');
        break;
    case 'thursday':
        console.log(`It's ${day} my dudes`);
        console.log('cry');
        break;
    case 'friday':
        console.log(`It's ${day} my dudes`);
        console.log('weep');
        break;
    case 'saturday':
        console.log(`It's ${day} my dudes`);
        console.log('blow shiz up');
        break;
    case 'sunday':
        console.log(`It's ${day} my dudes`);
        console.log('go to church');
        break;
    default:
        console.log(`${day} is not a valid day you moron`);
}

const age = 23;
age>=18 ? console.log('I like to drink wine'):
console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(`I like to drink ${drink}`);

//condensed
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/


//Coding Challenge #4
const billAmount = prompt('How much is the bill?');
const tipPercent = billAmount >= 50 && billAmount <= 300 ? 0.15 : 0.20;
const totalTip = tipPercent*billAmount;

//not yet working
console.log(`The tip should be $${totalTip.toFixed(2)} , which should be ${(tipPercent*100).toFixed(0)}% of the total bill, bringing the total to ${totalTip+billAmount}`);




