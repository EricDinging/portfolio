const select = document.querySelector('select');
const html = document.querySelector('html');
const as = document.querySelectorAll('a');

html.style.backgroundColor = 'black';
html.style.color = 'white';

function update(textColor, bgColor, linkcolor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
  for (const a of as) {
    a.style.color = linkcolor;
  }
}

select.addEventListener('change', () => select.value === 'white'
  ? update('black', 'white', 'blue')
  : update('white', 'black', 'violet')
);