
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

*/


let howManyHoursTotal = (5 + 4 + 2 + 1 + 4 + 3 + 5.5 + 2.5 + 6 + 3 + 5 + 4 + 4 + 5 + 4 + 8 + 1);
console.log(`It will take me at least ${howManyHoursTotal.toFixed(1)} Hours to complete this course.`);

let videoWatchSpeed = 1.5;
let howManyHoursPerDay = 3;
let howManyDays = (howManyHoursTotal / howManyHoursPerDay) / videoWatchSpeed;
let howManyWeeks = howManyDays / 7;
console.log(`Which is ${howManyDays.toFixed(1)} days, or ${howManyWeeks.toFixed(1)} weeks at ${howManyHoursPerDay.toFixed(1)} hours per day, at video watch speed of ${videoWatchSpeed.toFixed(2)}.`);
