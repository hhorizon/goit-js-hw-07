const categoriesList = document.querySelectorAll('.item');
console.log('В списке ' + categoriesList.length + ' категории.');

categoriesList.forEach(el => {
    console.log('Категория: ' + el.querySelector('h2').textContent);
    const elementsList = el.querySelectorAll('li');
    console.log('Количество элементов: ' + elementsList.length);
});