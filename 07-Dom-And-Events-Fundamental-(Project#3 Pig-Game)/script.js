"use strict";

// variable declaration
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const scoreTotalPlayer1 = document.getElementById("score--0");
const scoreCurrentPlayer1 = document.getElementById("current--0");
const scoreTotalPlayer2 = document.getElementById("score--1");
const scoreCurrentPlayer2 = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scoreTotal, currentScore, activePlayer, playing;

// starting Condition
function initialisation() {
  scoreTotal = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreTotalPlayer1.textContent = 0;
  scoreTotalPlayer2.textContent = 0;
  scoreCurrentPlayer1.textContent = 0;
  scoreCurrentPlayer2.textContent = 0;

  diceEl.classList.add("hidden");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
}
initialisation();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}

// function when user rolls dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generade random dice rolls
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice roll
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3. cek for rolled player 1
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1. add current score to sctive player's score
    scoreTotal[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scoreTotal[activePlayer];

    //2. Check if player's score is >= 100
    if (scoreTotal[activePlayer] >= 20) {
      // finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", initialisation);
