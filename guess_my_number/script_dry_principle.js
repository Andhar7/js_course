'use strict';

// ========== CONSTANTS ==========
const MAX_NUMBER = 20;
const MIN_NUMBER = 1;
const INITIAL_SCORE = 21;

// ========== DOM ELEMENTS (CACHED) ==========
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const bodyEl = document.querySelector('body');
const guessEl = document.querySelector('.guess');
const highscoreEl = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// ========== GAME STATE ==========
const gameState = {
    secretNumber: generateSecretNumber(),
    score: INITIAL_SCORE,
    highScore: 0,
    isPlaying: true
};

// ========== HELPER FUNCTIONS ==========

// Generate random number between MIN_NUMBER and MAX_NUMBER
function generateSecretNumber() {
    return Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

// Display message
function displayMessage(message) {
    messageEl.textContent = message;
}

// Update score display
function setScore(value) {
    scoreEl.textContent = value;
}

// Update number display
function setNumber(value) {
    numberEl.textContent = value;
}

// Update highscore display
function setHighscore(value) {
    highscoreEl.textContent = value;
}

// Update styles (background color and number box width)
function setStyles(bgColor, numberWidth, numberBgColor = '#eee') {
    bodyEl.style.backgroundColor = bgColor;
    numberEl.style.width = numberWidth;
    numberEl.style.backgroundColor = numberBgColor;
}

// Reset game to initial state
function resetGame() {
    gameState.secretNumber = generateSecretNumber();
    gameState.score = INITIAL_SCORE;
    gameState.isPlaying = true;

    setScore(INITIAL_SCORE);
    setNumber('?');
    guessEl.value = '';
    displayMessage('Start guessing...');
    setStyles('#110A40', '15rem', '#eee');
}

// Handle game win
function handleWin() {
    displayMessage('🔥 💯 💫 Correct Number!');
    setNumber(gameState.secretNumber);
    setStyles('blue', '33rem', 'red');
    gameState.isPlaying = false;

    // Update highscore if current score is better
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        setHighscore(gameState.highScore);
    }
}

// Handle game loss
function handleLoss() {
    displayMessage(`💫 You lost the game! The secret number was ${gameState.secretNumber}. Please try again! Never Give Up!`);
    setScore(0);
    gameState.score = 0;
    gameState.isPlaying = false;
}

// Handle wrong guess
function handleWrongGuess(guess) {
    if (gameState.score > 1) {
        displayMessage(guess > gameState.secretNumber ? '😉 Too high! Try again!' : '😩 Too low! Try again!');
        gameState.score--;
        setScore(gameState.score);
    } else {
        handleLoss();
    }
}

// ========== EVENT HANDLERS ==========

// Check button click handler
checkBtn.addEventListener('click', function() {
    // Don't allow guessing if game is over
    if (!gameState.isPlaying) return;

    const guess = Number(guessEl.value);
    console.log(guess, typeof guess);

    // No input
    if (!guess) {
        displayMessage('💢 No number entered!');

    // Out of range
    } else if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
        displayMessage(`⚠️ Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}!`);

    // Correct guess - WIN!
    } else if (guess === gameState.secretNumber) {
        handleWin();

    // Wrong guess
    } else {
        handleWrongGuess(guess);
    }
});

// Again button click handler
againBtn.addEventListener('click', resetGame);
