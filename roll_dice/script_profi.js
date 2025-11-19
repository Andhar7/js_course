'use strict';

// ========== CONSTANTS ==========
const WINNING_SCORE = 100;
const PLAYER_0 = 0;
const PLAYER_1 = 1;
const DICE_FACES = 6;

// ========== DOM ELEMENTS (CACHED) ==========
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// ========== GAME STATE ==========
const gameState = {
  scores: [0, 0],
  currentScore: 0,
  activePlayer: PLAYER_0,
  isPlaying: true,
};

// ========== HELPER FUNCTIONS ==========

/**
 * Generates a random dice roll (1-6)
 * @returns {number} Random number between 1 and DICE_FACES
 */
function rollDice() {
  return Math.trunc(Math.random() * DICE_FACES) + 1;
}

/**
 * Updates the score display for a specific player
 * @param {number} player - Player index (0 or 1)
 * @param {number} score - Score value to display
 */
function setScore(player, score) {
  document.querySelector(`#score--${player}`).textContent = score;
}

/**
 * Updates the current score display for a specific player
 * @param {number} player - Player index (0 or 1)
 * @param {number} score - Current score value to display
 */
function setCurrentScore(player, score) {
  document.querySelector(`#current--${player}`).textContent = score;
}

/**
 * Shows the dice with specified number
 * @param {number} diceNumber - Number to display (1-6)
 */
function showDice(diceNumber) {
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;
}

/**
 * Hides the dice
 */
function hideDice() {
  diceEl.classList.add('hidden');
}

/**
 * Switches the active player visual indicator
 */
function toggleActivePlayer() {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

/**
 * Resets current score and switches to the other player
 */
function switchPlayer() {
  // Reset current score display
  setCurrentScore(gameState.activePlayer, 0);
  gameState.currentScore = 0;

  // Switch active player
  gameState.activePlayer = gameState.activePlayer === PLAYER_0 ? PLAYER_1 : PLAYER_0;

  // Toggle visual indicator
  toggleActivePlayer();
}

/**
 * Handles win condition - marks player as winner and ends game
 */
function handleWin() {
  gameState.isPlaying = false;
  hideDice();

  // Add winner styling to active player
  document.querySelector(`.player--${gameState.activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${gameState.activePlayer}`).classList.remove('player--active');
}

/**
 * Initializes/resets the game to starting state
 */
function init() {
  // Reset game state
  gameState.scores = [0, 0];
  gameState.currentScore = 0;
  gameState.activePlayer = PLAYER_0;
  gameState.isPlaying = true;

  // Reset score displays
  setScore(PLAYER_0, 0);
  setScore(PLAYER_1, 0);
  setCurrentScore(PLAYER_0, 0);
  setCurrentScore(PLAYER_1, 0);

  // Hide dice
  hideDice();

  // Remove winner styling
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  // Set player 0 as active
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

// ========== EVENT HANDLERS ==========

/**
 * Handles dice roll button click
 */
function handleRollDice() {
  // Only allow rolling if game is still playing
  if (!gameState.isPlaying) return;

  // Generate random dice roll
  const dice = rollDice();

  // Display dice
  showDice(dice);

  // Check if rolled 1
  if (dice === 1) {
    // Rolled 1: lose current score and switch player
    switchPlayer();
  } else {
    // Add dice to current score
    gameState.currentScore += dice;
    setCurrentScore(gameState.activePlayer, gameState.currentScore);
  }
}

/**
 * Handles hold button click - adds current score to total
 */
function handleHold() {
  // Only allow holding if game is still playing
  if (!gameState.isPlaying) return;

  // Add current score to active player's total score
  gameState.scores[gameState.activePlayer] += gameState.currentScore;
  setScore(gameState.activePlayer, gameState.scores[gameState.activePlayer]);

  // Check if player won
  if (gameState.scores[gameState.activePlayer] >= WINNING_SCORE) {
    handleWin();
  } else {
    // Continue game: switch to next player
    switchPlayer();
  }
}

// ========== EVENT LISTENERS ==========
btnRoll.addEventListener('click', handleRollDice);
btnHold.addEventListener('click', handleHold);
btnNew.addEventListener('click', init);

// ========== INITIALIZE GAME ==========
init();
