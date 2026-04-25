import { useState, useEffect } from "react";
import "./App.css";

const reasons = [
  "You make even boring days feel special 💫",
  "Your smile literally fixes my mood 😊",
  "You understand me better than anyone ❤️",
  "You make me laugh when I don’t want to 😄",
  "You’re my favorite person to talk to 🫶",
  "You make me feel safe and loved 🏡",
  "You’re beautiful in ways you don’t even realize 🌸",
  "You support me no matter what 💪",
  "You’re my best friend ❤️",
  "Every moment with you feels right ⏳"
];

function App() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentText, setCurrentText] = useState("Click the button to see something special...");

  // Typing effect
  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + currentText.charAt(index));
      index++;
      if (index === currentText.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [currentText]);

  const generateReason = () => {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    setCurrentText(reasons[randomIndex]);
    createHeart();
  };

  // Floating hearts
  const createHeart = () => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Reasons Why I Love You Anisha ❤️</h1>
        <p className="text">{displayedText}</p>
        <button onClick={generateReason}>Show Me 💕</button>
      </div>
    </div>
  );
}

export default App;