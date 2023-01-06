function refreshTime() {
  var datetime = new Date();
  document.getElementById("time").textContent = datetime;
}
setInterval(refreshTime, 1000);

let ranNum = document.querySelector('.ranNum');
ranNum.textContent = `${random(10)}`;

let list = document.querySelector('.messageList');
let mesInput = document.querySelector('.messageInput');
const submitButton = document.querySelector('button');


let mesHis = [];
const MAX_HIS = 5;

if (localStorage.getItem('mesHisLocal')) {
  mesHis = localStorage.getItem('mesHisLocal').split(',');
  list.innerHTML = '';

  for (const itemText of mesHis) {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  }

  mesInput.value = '';
  mesInput.focus();
}

submitButton.onclick = () => {
  if (mesInput.value !== '') {
    mesHis.unshift(mesInput.value);
  }

  if (mesHis.length > MAX_HIS) {
    mesHis.pop();
  }

  localStorage.setItem('mesHisLocal', mesHis);

  list.innerHTML = '';

  for (const itemText of mesHis) {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  }

  mesInput.value = '';
  mesInput.focus();
}

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

let thumbimg = ['images/cycling.webp', 'images/formula1.jpeg'];
let thumbimgalt = ['My favourite cyclist', 'My favourite cycling team'];

for (let i = 0; i < thumbimg.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', thumbimg[i]);
  newImage.setAttribute('alt', thumbimgalt[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', ()=> {
    let tempsrc = displayedImage.src;
    let tempalt = displayedImage.alt;
    displayedImage.setAttribute('src', newImage.src);
    displayedImage.setAttribute('alt', newImage.alt);
    newImage.setAttribute('src', tempsrc);
    newImage.setAttribute('alt', tempalt);
  })
}
