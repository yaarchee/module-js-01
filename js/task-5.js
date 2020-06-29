const check = document.querySelector(".check");
let cost;
let nameCountry;

check.addEventListener("click",()=>checkCountry());



function checkCountry() {
  let userCountry = prompt("Введите название Вашей страны").toLowerCase();
  switch (userCountry) {
    case "китай":
      nameCountry =userCountry[0].toUpperCase()+userCountry.slice(1);
      cost= 100;
      setTimeout(setInfo, 500);

      break;
    case "чили":
      nameCountry =userCountry[0].toUpperCase()+userCountry.slice(1);
      cost= 250;
      setTimeout(setInfo, 500);
      break;
    case "австралия":
      nameCountry =userCountry[0].toUpperCase()+userCountry.slice(1);
      cost= 170;
      setTimeout(setInfo, 500);
      break;
    case "индия":
      nameCountry =userCountry[0].toUpperCase()+userCountry.slice(1);
      cost= 80;
      setTimeout(setInfo, 500);
      break;
    case "ямайка":

      nameCountry =userCountry[0].toUpperCase()+userCountry.slice(1);
      cost= 120;
      setTimeout(setInfo, 500);
      break;

    default:
      alert("В вашей стране доставка недоступна");
  }

}




function setInfo() {
  alert(`Доставка в ${nameCountry} будет стоить ${cost} кредитов`);
}