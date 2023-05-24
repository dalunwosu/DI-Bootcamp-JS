let header = document.getElementsByTagName("h1")[0];
console.log(header);
let parent = document.querySelector("article");
console.log(parent);
let remove = document.querySelector("article").lastElementChild;
console.log(remove);
parent.removeChild(remove);
let head = document.querySelector("h2");
head.addEventListener("click", color);
function color() {
  head.style.backgroundColor = "red";
}

let foot = document.querySelector("h3");
foot.addEventListener("click", disappear);
function disappear() {
  foot.style.display = "none";
}
let button = document.createElement("button");
button.addEventListener("click", change);
button.style.padding = "20px";
button.innerText = "Click to Change Font to Bold";
let place = document.querySelector("*");
console.log(place);
function change() {
  place.style.fontWeight = "bold";
}
document.body.appendChild(button);
