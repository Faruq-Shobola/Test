var greeting = document.querySelector(".greeting");

function greet() {
  var userName = "Faruq";
  greeting.textContent = `Hello ${userName}`;
}

setTimeout(greet, 2000);
