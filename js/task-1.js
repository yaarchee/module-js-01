"use strict";
const taskGo = document.querySelector(".task1 .task1-go");
const resultText = document.querySelector(".task1 .result");
const setPrice = document.querySelector(".task1 .set-price");
let promptData;

let nameProduct = "Генератор защитного поля";
let cost = 1000;

let result=`Выбран <<${nameProduct}>>, цена за штуку <span> ${cost}</span> кредитов`;

console.log(result);

taskGo.addEventListener('click',function () {
  resultText.innerHTML= result;
  resultText.querySelector("span").style.background = "green";
  setPrice.style.display ="inline";

});

setPrice.addEventListener("click",  ()=>setNewPrice());

 function setNewPrice(){
  promptData = +prompt("Установите новую цену");
  console.log(promptData);
  if(promptData===null){
    alert("введите целое число")
  }else if (Number.isInteger(promptData)&& promptData>0){
    resultText.innerHTML=result=`Выбран <<${nameProduct}>>, цена за штуку <span> ${promptData}</span>  за штуку`;
    resultText.querySelector("span").style.background = "aqua";

    console.log(result);
  }else{
    alert("введите целое число больше ноля");
  }
}