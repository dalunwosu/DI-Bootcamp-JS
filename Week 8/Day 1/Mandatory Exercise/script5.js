const element = document.getElementById("last");

function changeXPosition() {
  element.style.right = `${Math.floor(Math.random() * 300)}px`;
}

function changeYPosition() {
  element.style.top = `${Math.floor(Math.random() * 300)}px`;
}

function changeColor() {
  element.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function changeFontSize() {
  element.style.fontSize = `${Math.floor(Math.random() * 30) + 10}px`;
}

element.addEventListener("click", changeXPosition);

element.addEventListener("mouseover", changeYPosition);

element.addEventListener("mouseout", changeColor);

element.addEventListener("dblclick", changeFontSize);
