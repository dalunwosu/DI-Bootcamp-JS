function myMove() {
  let move = document.getElementById("animate");
  let position = 0;
  let animation = setInterval(action, 1);
  function action() {
    if (position == 350) {
      clearInterval(animation);
    } else {
      position++;
      move.style.left = position + "px";
    }
  }
}
