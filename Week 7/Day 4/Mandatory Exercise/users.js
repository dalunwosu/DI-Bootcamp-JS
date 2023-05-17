let user = document.getElementById("container");
console.log(user);
let label = document.getElementsByClassName("list")[0];
console.log(label);
let richard = label.children[1];
console.log(richard);
richard.textContent = "Richard";
console.log(richard);
let remove = document.getElementsByClassName("list")[1];
let sarahGone = remove.children[1];
console.log(sarahGone);
let gone = remove.removeChild(sarahGone);

for (i = 0; i <= 1; i++) {
  let change = document.getElementsByClassName("list")[i];
  let kids = change.children[0];
  kids.textContent = "Dalu";
  console.log(change);
}

for (i = 0; i <= 1; i++) {
  let lists = document.getElementsByClassName("list")[i];
  lists.classList.add("student_list");
}

label.classList.add("university");
label.classList.add("attendance");

user.style.backgroundColor = "lightblue";
user.style.padding = "4px";

label.firstElementChild.style.display = "none";
label.lastElementChild.style.border = "thick solid black";

let body = document.body;
body.style.fontSize = "25px";
