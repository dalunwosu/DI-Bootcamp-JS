const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

const planetColors = [
  "#1a1a1a",
  " #e6e6e6",
  "#2f6a69",
  "#993d00",
  "#b07f35",
  "#b08f36",
  "#5580aa",
  "#366896",
  "#f6ddbd",
];

const listPlanets = document.getElementsByClassName("listPlanets")[0];

for (let i = 0; i < planets.length; i++) {
  let planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planetColors[i];
  planetDiv.innerHTML = planets[i];
  listPlanets.appendChild(planetDiv);
}
