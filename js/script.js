'use strict';

//--------------------1----------------------------
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число :");
  if (input === null){
    break;
  }
  input = Number(input);
  numbers.push(input);
  if (numbers.length > 0 ) {
    for (let i = 0; i < numbers.length; i += 1) {
    total = total + input;
    break;
    }
  }
  console.log(`Общая сумма чисел равна ${total}`);
}




//--------------------2----------------------------

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userAttempt;
let userInput;

while (attemptsLeft > 0) {
  let userInput = prompt("Введите пароль");
  if (userInput === null){
    alert("Отмена");
    break;
  }
  if (passwords.includes(userInput)) {
    alert('Добро пожаловать!');
    break;
  }

  for (let i=3; i >= attemptsLeft && i> 1; i-=1) {
    attemptsLeft = attemptsLeft - 1;
    if (attemptsLeft === 0) {
      alert(`У вас закончились попытки, аккаунт заблокирован!`);
      break;
    }
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    break;

  }
}

