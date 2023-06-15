import "./App.css";
import quotes from "./QuotesDatabase";
import React, { useState, useEffect } from "react";

function fadeInElement() {
  let element = document.getElementById("quote");

  element.style.opacity = 0;
  element.style.display = "block";

  element.classList.add("fadeIn");

  element.addEventListener("animationend", function () {
    element.style.opacity = 1;
    element.classList.remove("fadeIn");
  });

  element.addEventListener("click", function () {
    element.style.opacity = 0;
    element.classList.remove("fadeIn");
    void element.offsetWidth;
    element.classList.add("fadeIn");
  });

  let author = document.getElementById("author");

  author.style.opacity = 0;
  author.style.display = "block";

  author.classList.add("fadeIn");

  author.addEventListener("animationend", function () {
    author.style.opacity = 1;
    author.classList.remove("fadeIn");
  });

  author.addEventListener("click", function () {
    author.style.opacity = 0;
    author.classList.remove("fadeIn");
    void author.offsetWidth;
    author.classList.add("fadeIn");
  });
}

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    setBackgroundColor(randomColor());
  };

  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + ("000000" + color).slice(-6);
  };

  const buttonColor = randomColor();
  const textColor = buttonColor;

  document.body.style.backgroundColor = buttonColor;
  const fadeInColor = () => {
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = buttonColor;
  };

  return (
    <div style={{ backgroundColor: "white" }} className="quotebox">
      <div class="fadeIn" style={{ color: textColor }}>
        <h1 id="quote">"{quote}"</h1>
        <h5 id="author">-{author}-</h5>
      </div>
      <button
        style={{ backgroundColor: buttonColor, color: "white" }}
        id="newquote"
        onClick={() => {
          generateQuote();
          fadeInElement();
          fadeInColor();
        }}
      >
        New quote
      </button>
    </div>
  );
}

export default App;
