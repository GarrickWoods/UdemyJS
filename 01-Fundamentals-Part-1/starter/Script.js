/*
 let JS = 'amazing';
if (JS === 'amazing') alert('Suck It');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
*/

/*
const birthyear = 1995;
let century;

if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(birthyear);
console.log(century);
*/

/*
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
*/

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