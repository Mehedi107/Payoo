'use strict';

const balance = document.querySelector('.balance');
const inputAddMoney = document.querySelector('.input-add-money');
const inputAddMoneyPin = document.querySelector('.input-add-money-pin');
const inputWithdrawMoney = document.querySelector('.input-withdraw-money');
const inputWithdrawMoneyPin = document.querySelector(
  '.input-withdraw-money-pin'
);

const btnAddMoney = document.querySelector('.btn-add-money');
const btnDeposit = document.querySelector('.btn-deposit');
const btnWithdrawal = document.querySelector('.btn-withdrawal');
const btnWithdrawMoney = document.querySelector('.btn-withdraw-money');

btnWithdrawal.addEventListener('click', function () {
  document.querySelector('.withdraw-money-form').classList.remove('hidden');
  document.querySelector('.add-money-form').classList.add('hidden');
});

btnDeposit.addEventListener('click', function () {
  document.querySelector('.withdraw-money-form').classList.add('hidden');
  document.querySelector('.add-money-form').classList.remove('hidden');
});

btnAddMoney.addEventListener('click', function (e) {
  e.preventDefault();

  if (Number(inputAddMoneyPin.value) === 1234) {
    balance.textContent =
      Number(balance.textContent) + Number(inputAddMoney.value);
    inputAddMoney.value = inputAddMoneyPin.value = '';
    inputAddMoney.blur();
    inputAddMoneyPin.blur();
  } else {
    alert('Something went wrong!');
  }
});

btnWithdrawMoney.addEventListener('click', function (e) {
  e.preventDefault();

  if (Number(inputWithdrawMoneyPin.value) === 1234) {
    balance.textContent =
      Number(balance.textContent) - Number(inputWithdrawMoney.value);
    inputWithdrawMoney.value = inputWithdrawMoneyPin.value = '';
    inputWithdrawMoney.blur();
    inputWithdrawMoneyPin.blur();
  } else {
    alert('Something went wrong!');
  }
});
