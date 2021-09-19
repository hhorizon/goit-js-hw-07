const counterValue = document.querySelector('#value');

const incrementBtn = document.querySelector('[data-action="increment"]');
const increment = () => counterValue.textContent++;
incrementBtn.addEventListener('click', increment);

const decrementBtn = document.querySelector('[data-action="decrement"]');
const decrement = () => counterValue.textContent--;
decrementBtn.addEventListener('click', decrement);

