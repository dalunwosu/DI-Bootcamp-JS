function hello() {
  alert("Hello World!");
}
setTimeout(hello, 2000);

function add() {
  let para = document.createElement("p");
  para.innerHTML = "Hello World!";
  let container = document.getElementById("container");
  container.appendChild(para);
  counter--;
  if (counter === 0) {
    clearInterval(mid);
  }
}
setTimeout(add, 2000);

let mid = setInterval(add, 2000);

let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  clearInterval(mid);
});

let counter = 5;
