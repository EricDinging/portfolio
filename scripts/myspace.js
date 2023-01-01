function refreshTime() {
  var datetime = new Date();
  document.getElementById("time").textContent = datetime;
}
setInterval(refreshTime, 1000);