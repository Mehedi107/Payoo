'use strict';

const inputMail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputMail.value === 'abc@gmail.com' &&
    Number(inputPassword.value) === 1234
  ) {
    window.location.href = '/account.html';
  } else {
    alert('Your email or password is incorrect');
  }
});
