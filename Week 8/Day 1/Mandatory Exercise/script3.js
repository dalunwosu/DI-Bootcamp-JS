let allBoldItems;

function getBold_items() {
  allBoldItems = document.querySelectorAll("strong");
}
getBold_items();
function highlight() {
  allBoldItems.forEach((element) => {
    element.style.color = "blue";
  });
}
function return_normal() {
  allBoldItems.forEach((element) => {
    element.style.color = "black";
  });
}
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", return_normal);
