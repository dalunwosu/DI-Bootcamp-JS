let form = document.getElementById("MyForm");

let radius = document.getElementById("radius");

form.addEventListener("submit", function submit(event) {
  event.preventDefault();
  let radiusValue = radius.value;
  if (isNaN(radiusValue)) return;
  let r = Math.pow(radiusValue, 3);
  let pi = 22 / 7;
  let solution = (4 / 3) * r * pi;
  let answer = Math.round(solution * 100) / 100;
  let Volume = document.getElementById("volume");
  Volume.value = answer;
});
