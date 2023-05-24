const form = document.getElementById("libform");
form.addEventListener("submit", function story(event) {
  event.preventDefault();
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;
  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all the inputs");
    return;
  }
  const sentence = `Once upon a time there was a ${adjective} ${noun}. They loved to ${verb} with ${person} in ${place}.`;
  let tale = document.getElementById("story");
  tale.innerHTML = sentence;
  const shuffle = () => {
    const stories = [
      `Once upon a time there was a ${adjective} ${noun}. They loved to ${verb} with ${person} in ${place}.`,
      `${person} went on a trip to ${place} with a ${adjective} ${noun}. They decided to ${verb} on their journey.`,
      `${place} was a magical place where ${person} and their ${adjective} ${noun} would ${verb} everyday.`,
    ];

    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById("story").innerHTML = randomStory;
  };

  document.getElementById("shuffle-button").addEventListener("click", shuffle);
});
