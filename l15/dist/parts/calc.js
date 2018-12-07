function calc() {
 let persons = document.querySelectorAll(".counter-block-input")[0],
  restDays = document.querySelectorAll(".counter-block-input")[1],
  calcInputs = document.querySelectorAll(".counter-block-input"),
  place = document.getElementById("select"),
  totalValue = document.getElementById("total"),
  total = 0;

 totalValue.innerHTML = total;
 //функция анимации чисел
 function animateTotalSum(startCount, endCount, element) {
  let totalValue = startCount;
  let increament = totalValue < endCount ? 100 : -100;
  let timer = setInterval(function () {
   totalValue += increament;
   element.innerHTML = totalValue;
   if (totalValue == endCount) {
    clearInterval(timer);
   }
  }, 1);
 }
 //Функция подсчёта итоговой суммы
 function totalSumCalc(rst, prs) {
  if (+rst && +prs) {
   total = (+rst + +prs) * 4000;
   //totalValue.innerHTML = total * place.options[place.selectedIndex].value;
   animateTotalSum(+totalValue.innerHTML, total * place.options[place.selectedIndex].value, totalValue);
  } else {
   totalValue.innerHTML = 0;
  }
 }

 [persons, restDays, place].forEach((item) => {
  item.addEventListener("change", () => {
   totalSumCalc(restDays.value, persons.value);
  });
 });
 //провека ввода только цифр
 calcInputs.forEach((item) => {
  item.addEventListener("keypress", (e) => {
   if (/\D/.test(e.key)) {
    e.preventDefault();
   }
  });
 });
}

module.exports = calc;