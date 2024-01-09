'use strict';

const check = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const guessNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const body = document.querySelector('body');
let score = 20;

const scoreFail = function () {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    message.textContent = '💥 You lost the game';
    document.querySelector('.score').textContent = 0;
    guessInput.value = '';
  }
};

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const clickHandler = function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = 'No number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number';
    guessNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    guessNumber.style.width = '30rem';
  } else if (guess > secretNumber) {
    message.textContent = '🎢 To High';
    scoreFail();
  } else if (guess < secretNumber) {
    message.textContent = '📉 To Low';
    scoreFail();
  }
};

check.addEventListener('click', clickHandler);
