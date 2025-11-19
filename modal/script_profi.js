'use strict';

// ========== DOM ELEMENTS (CACHED) ==========
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// ========== HELPER FUNCTIONS ==========

/**
 * Opens the modal window and shows overlay
 */
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

/**
 * Closes the modal window and hides overlay
 */
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

/**
 * Handles keyboard events - closes modal on Escape key
 * @param {KeyboardEvent} e - The keyboard event object
 */
function handleKeydown(e) {
    // Only close if Escape pressed AND modal is currently visible
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
}

// ========== EVENT LISTENERS ==========

// Attach click handler to all "Show modal" buttons
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Close modal when X button clicked
btnCloseModal.addEventListener('click', closeModal);

// Close modal when overlay (background) clicked
overlay.addEventListener('click', closeModal);

// Close modal when Escape key pressed
document.addEventListener('keydown', handleKeydown);
