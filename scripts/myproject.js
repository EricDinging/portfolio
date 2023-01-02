const select = document.querySelector('select');
const html = document.querySelector('html');

html.style.backgroundColor = 'black';
html.style.color = 'white';

function update(textColor, bgColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => select.value === 'white'
  ? update('black', 'white')
  : update('white', 'black')
);