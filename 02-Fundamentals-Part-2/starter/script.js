'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log(`I can drive`);

const interface = 'Audio';
const private = 534;

*/

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
