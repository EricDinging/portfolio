const myHeading = document.querySelector("h1");
myHeading.textContent = "Eric Ding";

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/web-back1.jpg") {
    myImage.setAttribute("src", "images/web-back2.jpeg");
  } else {
    myImage.setAttribute("src", "images/web-back1.jpg");
  }
};

// button
let myButton = document.querySelector("button");
let greeting = document.querySelector("h2");

if (localStorage.getItem("name")) {
    const storedName = localStorage.getItem("name");
    greeting.textContent = `Have a great day, ${storedName}!`;
  }

  myButton.onclick = () => {
    setUserName();
  };

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        greeting.textContent = `Have a great day, ${myName}!`;
    }
  }