let form = document.querySelector("form");
console.log(form);

let firstName = document.getElementById("fname");
console.log(firstName);

let lastName = document.getElementById("lname");
console.log(lastName);

const give = document.getElementById("submit");
console.log(give);

let title = document.getElementsByName("fname");
console.log(title);

let head = document.getElementsByName("lname");
console.log(head);

form.addEventListener("submit", function occassion(event) {
  event.preventDefault();
  const names = firstName.value;
  const titles = lastName.value;
  if (!names || !titles) return;
  console.log(names);
  console.log(titles);
  const namesItem = document.createElement("li");
  namesItem.textContent = names;

  const titlesItem = document.createElement("li");
  titlesItem.textContent = titles;

  const usersAnswerList = document.getElementsByClassName("usersAnswer")[0];
  usersAnswerList.appendChild(namesItem);
  usersAnswerList.appendChild(titlesItem);
});
