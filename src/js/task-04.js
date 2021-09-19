const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const increment = () => counterValue.textContent++;

const decrement = () => counterValue.textContent--;


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

