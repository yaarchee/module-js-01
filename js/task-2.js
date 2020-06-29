"use strict";
const total =  document.querySelector(".task2 .total");
const order = document.querySelector(".task2 .order span");
const setOrder = document.querySelector(".task2 .set-order");
let  promptOder;
const baseText = total.innerHTML;
const balance = 130;


total.innerHTML = total.innerHTML+balance;
setOrder.addEventListener("click", ()=>newOeder());


function newOeder() {
  promptOder = +prompt("Установите новую цену");
  console.log(promptOder);
  if(promptOder===null){
    alert("введите целое число")
  }else if (Number.isInteger(promptOder)&& promptOder>0 && promptOder<=balance){

    order.innerHTML = promptOder;
    total.innerHTML = baseText+(balance-promptOder);
    setTimeout(manager, 500);




  }else{
    alert("введите целое число больше ноля и не больше остатка на складе");
  }
}



function manager() {
  alert("Заказ оформлен, с вами свяжется менеджер");
  total.innerHTML = baseText+ balance;
  order.innerHTML = "0";
}
