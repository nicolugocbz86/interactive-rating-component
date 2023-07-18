const inputButtons = document.querySelectorAll('.inputButtons');
const inputSubmit = document.getElementsByTagName('input');

inputSubmit[5].addEventListener('click', () => {

    let form = document.getElementsByTagName('form');
    let formResponse = document.querySelectorAll('.form-response');
    let span = document.getElementsByTagName('span');

    form[0].style.display = 'none';
    formResponse[0].style.display = 'flex';
    span[0].textContent = 'texto';

});