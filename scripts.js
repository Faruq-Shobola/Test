var greeting = document.querySelector(".greeting");

function greet() {
  var name = "Faruq";
  greeting.textContent = `Hello ${name}`;
}


setTimeout(greet, 2000);