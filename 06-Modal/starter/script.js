'use strict';

const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');
const BTNS_OpenModal = document.querySelectorAll('.show-modal');
const BTNS_CloseModal = document.querySelector('.close-modal');
console.log(BTNS_OpenModal);

for (let i = 0; i < BTNS_OpenModal.length; i++) {
  console.log(
    BTNS_OpenModal[i].addEventListener('click', function () {
      console.log(`btn ${i + 1} clicked`);
      // MODAL.style.display = 'inline-block';
      MODAL.classList.remove('hidden'); // NO NEED TO USE '.' HERE it knows already that is a class
      OVERLAY.classList.remove('hidden');
    })
  );
}
// FUNCTION TO CLOSE THE MODAL or add the hidden class
const CLOSE_MODAL = function () {
  MODAL.classList.add('hidden');
  OVERLAY.classList.add('hidden');
};

BTNS_CloseModal.addEventListener('click', CLOSE_MODAL);
OVERLAY.addEventListener('click', CLOSE_MODAL);

/**KEY EVENT */
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !MODAL.classList.contains('hidden')) {
    // execute only if modal is open/show
    CLOSE_MODAL();
    console.log(event);
  }
});
