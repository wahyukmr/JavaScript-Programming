"use strict";

const body = document.querySelector("body");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let heighScore = 0;

function displayMessage(messageContent) {
  document.querySelector(".message").textContent = messageContent;
}

function calculationScore(scoreValue) {
  document.querySelector(".score").textContent = scoreValue;
}

function trueStatements(statement) {
  displayMessage(statement);
  scoreNumber--;
  calculationScore(scoreNumber);
}

function falseStatement() {
  displayMessage("YOU LOSE...");
  calculationScore(0);
  document.querySelector(".again").classList.add("show");
}

function highestScore() {
  if (scoreNumber > heighScore) {
    heighScore = scoreNumber;
    document.querySelector(".highscore").textContent = scoreNumber;
  }
}

document.querySelector(".check").addEventListener("click", function () {
  const number = document.querySelector(".number");
  const guess = Number(document.querySelector(".guess").value);

  if (guess === randomNumber) {
    if (scoreNumber == 20) {
      highestScore();
      displayMessage("YOU WIN...🎉");
      body.style.backgroundColor = "#60b347";
    } else {
      highestScore();
      displayMessage("Correct Number");
    }
    document.querySelector(".again").classList.add("show");
    number.textContent = randomNumber;
    number.style.padding = "2.5rem 8rem";
  } else if (guess >= 1 && guess <= 20) {
    scoreNumber > 1
      ? trueStatements(
          guess > randomNumber ? "Number too high!" : "Number too low!"
        )
      : falseStatement();
  } else if (guess < 1 || guess > 20) {
    scoreNumber > 1
      ? trueStatements("⛔ choose Between 1 and 20")
      : falseStatement();
  }
});

//////////////////////////////
/* Coding Challenge #1 */
/////////////////////////////
/* 
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
    1. Select the element with the 'again' class and attach a click event handler
    2. In the handler function, restore initial values of the 'score' and 'randomNumber' variables
    3. Restore the initial conditions of the message, number, score and guess input fields
    4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.padding = "2.5rem";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  calculationScore(scoreNumber);
  document.querySelector(".again").classList.remove("show");
  body.style.backgroundColor = "#222";
});
