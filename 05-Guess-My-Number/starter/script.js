'use strict';

/*
console.log(document.querySelector('.message').textContent); 
document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';
console.log(document.querySelector('.message').textContent); 

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = '00';
console.log(document.querySelector('.guess').value);

*/

document.querySelector('.check').addEventListener('click', function(){
   const numberGuess = Number(document.querySelector('.guess').value);
   console.log(numberGuess, typeof numberGuess);

   If(!guess){
       document.querySelector('.message').textContent = '⛔ No number!';
   }
});


