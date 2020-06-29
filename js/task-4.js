const credits = document.querySelector(".task4 .credits span");
const doridCost = document.querySelector(".droid-cost span");
const ourDroids= document.querySelector(".our-droid span");
const mainCredits= +credits.innerHTML;

const buy = document.querySelector(".buy");

let credit = +credits.innerHTML;

let pricePerDroid  = +doridCost.innerHTML;
let promptData;
let totalPrice;

buy.addEventListener("click", ()=>setDroids());



function setDroids() {
  promptData = prompt("Сколько дроидов хотите купить?");
  console.log(promptData);
  if (promptData === null) {
    alert("отменено пользователем")
  } else if (Number.isInteger(+promptData) && +promptData > 0) {
    let  totalPrice = +promptData * +pricePerDroid;
    checkBalance(totalPrice);
    console.log(result);
  } else {
    alert("введите целое число больше ноля");
  }
}


function checkBalance(totalPrice) {
    if(totalPrice>credit){
      alert("Недостаточно средств на счету!");
    }else{
      credits.innerHTML = credit-totalPrice;
      ourDroids.innerHTML = promptData;
      setTimeout(info, 500, totalPrice);
    }
}


function info(totalPrice) {
  alert(`Вы купили ${promptData} дроидов, на счету осталось ${credit-totalPrice} кредитов.`);
  ourDroids.innerHTML = "0";
  credits.innerHTML = mainCredits;
}