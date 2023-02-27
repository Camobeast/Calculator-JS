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

let tempNumberOne = "";
let tempNumberTwo = "";
let tempOperator = "";
let onScreen = 15;
let screen = document.querySelector('.screen');
let numberButtons = document.querySelectorAll('.numbers')
let operatorButtons = document.querySelectorAll('.operators');
let functionButtons = document.querySelectorAll('.functions');
let equalButton = document.querySelector('.equal');
screen.innerText = "0";


for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    if (screen.innerText === "0") {
        tempNumberOne = numberButtons[i].innerText;
        screen.innerText = "";
        screen.innerText += tempNumberOne;
    } else {
        tempNumberOne = numberButtons[i].innerText;
        screen.innerText += tempNumberOne;
    }
  });
};


for (let j = 0; j < operatorButtons.length; j++) {
  operatorButtons[j].addEventListener("click", () => {
    tempOperator = operatorButtons[j].innerText;
    screen.innerText += tempOperator;
  });
}

for (let k = 0; k < functionButtons.length; k++) {
  functionButtons[k].addEventListener("click", () => {
    if (functionButtons[k].innerText == "DEL") {
      return false;
    }
    if (functionButtons[k].innerText == "RESET") {
      location.reload();
      return false;
    }
  });
}

equalButton.addEventListener("click", () => {
  switch (tempOperator) {
    case "+":
      result = screen.innerText.split("+");
      screen.innerText = Number(result[0]) + Number(result[1]);
      break;
    case "-":
      result = screen.innerText.split("-");
      screen.innerText = Number(result[0]) - Number(result[1]);
      break;
    case "x":
      result = screen.innerText.split("x");
      screen.innerText = Number(result[0]) * Number(result[1]);
      break;
    case "/":
      result = screen.innerText.split("/");
      screen.innerText = Number(result[0]) / Number(result[1]);
      break;
  }
});