const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.setAttribute('min', '1');
inputRef.setAttribute('max', '10');
inputRef.setAttribute('step', '0.05');

inputRef.addEventListener('change', e => {
    spanRef.style.fontSize = e.target.value + 'rem';
});