const select = document.querySelector('#theme');
const html = document.querySelector('html');

html.style.color = 'black';
html.style.backgroundColor = 'white';

function update(textColor, bgColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => select.value === 'white'
  ? update('black', 'white')
  : update('white', 'black')
);

let generalCalc = document.querySelector('#generalCalculator');
let tempConverter = document.querySelector('#tempConverter');
let calselect = document.querySelector('#calSelectorS');
let active;

function calsel() {
  if (active) {
    active.classList.add('hidden');
  }
  switch(calselect.value) {
    case 'g':
      active = generalCalc;
      active.classList.remove('hidden');
      break;
    case 't':
      active = tempConverter;
      active.classList.remove('hidden');
      break;
    default:
  }
}
calselect.addEventListener('change', calsel);

let numA = document.querySelector('.numA');
let numB = document.querySelector('.numB');
let op = document.querySelector('#operator');
let calButton = document.querySelector('.calButton');
let result = document.querySelector('.result');
let resultText = '';

calButton.onclick = () => {
  if (numA.value && numB.value !== '') {
    const A = Number(numA.value);
    const B = Number(numB.value);
    let result = 0;
    if (isNaN(A) || isNaN(B)) {
      resultText = "At least one input is not a number";
    } else {
      switch (op.value) {
        case '+':
          result = A + B;
          resultText = `${A} + ${B} = ${result}`;
          break;
        case '-':
          result = A - B;
          resultText = `${A} - ${B} = ${result}`;
          break;
        case '*':
          result = A * B;
          resultText = `${A} * ${B} = ${result}`;
          break;
        case '/':
          result = A / B;
          resultText = `${A} / ${B} = ${result}`;
          break;
        default:
          resultText = "";
      }
    }
  }
  result.textContent = resultText;

  // numA.value = '';
  // numB.value = '';
  numA.focus();
}

let tempInput = document.querySelector('.tempInput');
let tempUnit = document.querySelector('#tempUnit');
let tempResult = document.querySelector('.tempResult');

function calTemp() {
  if (tempInput.value != '') {
    let temp = Number(tempInput.value);
    if (isNaN(temp)) {
      tempResult.textContent = "Your input is not a number";
    } else {
      let tempConv = 0;
      switch(tempUnit.value) {
        case 'F':
          tempConv = ((temp - 32) * 5 / 9).toFixed(2);
          tempResult.textContent = `${temp} °F is ${tempConv} °C`;
          break;
        case 'C':
          tempConv = (temp * 9 / 5 + 32).toFixed(2);
          tempResult.textContent = `${temp} °C is ${tempConv} °F`;
          break;
        default:
          tempResult = '';
      }
    }
  }
  tempUnit.value = 'None';
}

tempUnit.addEventListener('change', calTemp);