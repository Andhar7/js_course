'use strict';

let secretNumber = Math.trunc(Math.random() * 21) + 1;

let score = 21;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {

        alert('Please enter a number!');
        document.querySelector('.message').textContent = '💢 No number entered!';

    } else if (guess === secretNumber) {

        document.querySelector('.message').textContent = '🔥 💯 💫 Correct Number!';

        document.querySelector('body').style.backgroundColor = 'blue';
        document.querySelector('.number').style.width = '33rem';
        document.querySelector('.number').style.backgroundColor = 'red';

        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


    } else if (guess > secretNumber) {

        if (score > 1) {

            document.querySelector('.message').textContent = '😉 Too high! Try again!';

            score--;

            document.querySelector('.score').textContent = score;

        } else {

            document.querySelector('.message').textContent = '💫 You lost the game! The secret number was ${secretNumber}. ' +
                'Please try again! Never Give Up!';

            document.querySelector('.score').textContent = 0;

        }


    } else if (guess < secretNumber) {

        if (score > 1) {

            document.querySelector('.message').textContent = '😩 Too low! Try again!';

            score--;

            document.querySelector('.score').textContent = score;

        } else {

            document.querySelector('.message').textContent = '💫 You lost the game! The secret number ' +
                'was ' + secretNumber + ' PLease try again! Never Give Up!';

            document.querySelector('.score').textContent = 0;

        }
    }
})

document.querySelector('.again').addEventListener('click', function () {

    score = 21;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#110A40';
    document.querySelector('.number').style.width = '15rem';

})





















