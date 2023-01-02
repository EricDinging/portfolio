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

let numA = document.querySelector('.numA');
let numB = document.querySelector('.numB');
let op = document.querySelector('#operator');
let submitButton = document.querySelector('button');
let result = document.querySelector('.result');
let resultText = '';

submitButton.onclick = () => {
  if (numA.value !== '' && numB.value !== '') {
    const A = Number(numA.value);
    const B = Number(numB.value);
    let result = 0;
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
  result.textContent = resultText;

  // numA.value = '';
  // numB.value = '';
  numA.focus();
}

