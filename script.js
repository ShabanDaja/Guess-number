'use strict';

const check = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const guessNumber = document.querySelector('.number');
const messageTest = document.querySelector('.message');
const body = document.querySelector('body');
const reset = document.querySelector('.again');

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  messageTest.textContent = message;
};

const scoreNumber = function (score1) {
  document.querySelector('.score').textContent = score1;
};

const scoreFail = function () {
  if (score > 1) {
    score--;
    scoreNumber(score);
  } else {
    displayMessage('💥 You lost the game');
    scoreNumber(0);
  }
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const clickHandler = function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');
    guessNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    guessNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '🎢 To High' : '📉 To Low');
    scoreFail();
  }
};

const resetHandler = function () {
  score = 20;
  guessInput.value = '';
  displayMessage('Start guessing...');
  guessNumber.textContent = '?';
  body.style.backgroundColor = '#222';
  guessNumber.style.width = '15rem';
  scoreNumber(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

check.addEventListener('click', clickHandler);
reset.addEventListener('click', resetHandler);
