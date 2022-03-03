'use strict';

// Both do the same but are different. GetElementByID is just easier cause no #
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')

const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// initialize without values
let scores, currentScore, activePlayer, playing;

const init = function(){
    // starting conditions
    diceEl.classList.add('hidden');
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

const switchPlayer = function(){
        //set the player's Score to 0 and switch players
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

btnRollDice.addEventListener('click', function(){
    if (playing) {
        // generate random dice roll
        let randomDice = Math.trunc(Math.random()*6)+1;

        // display rolled dice
        diceEl.classList.remove ('hidden');
        // modify the displayed image in HTML file
        diceEl.src = `dice-${randomDice}.png`;
        
        // check for rolled 1: if true, switch to next player
        if (randomDice !=1) {
            // add the dice roll to the player's current score
            currentScore += randomDice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            // what happens when the player rolls a 1
            switchPlayer();
            
        }
    }
});

btnHold.addEventListener('click', function(){
    if (playing) {
        console.log(activePlayer, scores[activePlayer]);
        //add current score to the active player's score. 
        // scores[1] = scores[1] + currentScore;
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // check score is >=1000
        //finish game
        if (scores[activePlayer] >= 100) {
            //active player won
            playing = false;
            diceEl.classList.add ('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
            // switch to the next players
            switchPlayer();
        }
    }
})

btnNewGame.addEventListener('click', init)