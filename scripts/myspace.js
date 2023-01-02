function refreshTime() {
  var datetime = new Date();
  document.getElementById("time").textContent = datetime;
}
setInterval(refreshTime, 1000);

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

  console.log(mesInput.value);

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