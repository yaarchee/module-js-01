"use strict";

let logIn = document.querySelector(".login");

const ADMIN_PASSWORD = 'js';
let message;

logIn.addEventListener("click", ()=>checkPassword());




function checkPassword() {
  let userData = prompt("Введите пароль");

  if(userData===null){
    message= "Отменено пользователем";

  }else if(userData===ADMIN_PASSWORD){
    message= "Добро пожаловать";
  }else{
    message= "Пароль неверный";
  }


  alert(message);
}