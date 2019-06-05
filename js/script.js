'use strict';

//--------------------1----------------------------
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число :");
  if (input === null) {
    break;
  }
  input = Number(input);
  numbers.push(input);
}
if (numbers.length> 0) {
  for (const valueUser of numbers) {
    total += valueUser;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}


//--------------------2----------------------------

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

while (attemptsLeft !== 0) {
  let userInput = prompt("Введите пароль");
  if (userInput === null){
    alert("Отмена");
    break;
  }
  if (passwords.includes(userInput)) {
    alert('Добро пожаловать!');
    break;
  }
   attemptsLeft -= 1;
    if (!attemptsLeft) {
      alert(`У вас закончились попытки, аккаунт заблокирован!`);
      break;
    }
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
}

