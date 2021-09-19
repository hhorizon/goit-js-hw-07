const inputRef = document.querySelector('input')
const inputLength = inputRef.dataset.length;

inputRef.addEventListener('change', e => {
    const text = e.target.value;

    if (text.length == inputLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
})