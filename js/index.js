console.log('test');

const inputButtons = document.querySelectorAll('.inputButtons');
let inputSubmit = document.getElementById('inputSubmit');

inputButtons.forEach( a => {
    a.addEventListener('click', () => {
        console.log(a.value);
    })
});