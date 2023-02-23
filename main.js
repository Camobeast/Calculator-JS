/* ============
   THEME SWITCH
   ============ */

let buttons = document.getElementsByClassName('button');
let arr = [...buttons];

arr.forEach((element, index) => {
    element.addEventListener('click', () => {
        element.style.opacity = "1";

        arr
           .filter(function (item) {
             return item != element;
           })
           .forEach((item) => {
             item.style.opacity = "0";
           });
    });
});

/* ============
   CALCULATIONS
   ============ */

let tempNumberOne = 0;
let tempNumberTwo = 0;
let tempOperator = " ";
let onScreen = 15;
let screen = document.querySelector('.screen');
let numberButtons = document.querySelectorAll('.numbers')
let operatorButtons = document.querySelectorAll('.operators');
let functionButtons = document.querySelectorAll('.functions');
let equalButton = document.querySelector('.equal');

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    tempNumberOne = Number(numberButtons[i].innerText);
    screen.innerText = tempNumberOne + tempOperator + tempNumberTwo;
  });
}

for (let j = 0; j < operatorButtons.length; j++) {
  operatorButtons[j].addEventListener("click", () => {
    tempOperator = " " + operatorButtons[j].innerText + " ";
    screen.innerText = tempNumberOne + tempOperator + tempNumberTwo;
  });
}

for (let k = 0; k < functionButtons.length; k++) {
  functionButtons[k].addEventListener("click", () => {
    if (functionButtons[k].innerText == "DEL") {

    }
    if (functionButtons[k].innerText == "RESET") {
      location.reload();
      return false;
    }
  });
}

equalButton.addEventListener("click", () => {
  onScreen = tempNumberOne + tempNumberTwo;
  screen.innerText = onScreen;
  return;
});