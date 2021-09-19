const inputRef = document.querySelector('#name-input');
const outputPef = document.querySelector('#name-output');

console.log(outputPef.textContent);


inputRef.addEventListener('input', (text) => {
    if (inputRef.value === '') {
        outputPef.textContent = 'незнакомец';
    } else {
        outputPef.textContent = text.currentTarget.value;
    }
}
)