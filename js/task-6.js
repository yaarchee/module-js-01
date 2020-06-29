const  start = document.querySelector(".start");
const  totals = document.querySelector(".total span");
let promptData;
let total = 0;




start.addEventListener("click", function () {
  do{
    promptData = prompt("Введите число?");


    if (Number.isInteger(+promptData)){
      total+=(+promptData);
      totals.innerHTML =total;
    }else{
      alert("введите число");
    }

  }while (promptData!==null);

  if(promptData==null){
    alert(` Общая сумма чисел равна ${total}`);
  }

});

