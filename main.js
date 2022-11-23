"use strict";

let number = Math.floor(Math.random() * 20 + 1);

const check = document.querySelector(".check");
const message = document.querySelector(".message");
let score = 20;
let highScore = 0;

check.addEventListener("click", () => {
  const input = Number(document.querySelector(".guess").value);

  if (input === 0) {
    message.textContent = "no number 🚫";
  } else if (input === number) {
    message.textContent = "correct number 🏆";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = input;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    } else {
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (input !== number) {
    message.textContent = input > number ? "too high 📈" : "too low 📉";
    score--;
    document.querySelector(".score").textContent =
      score >= 1
        ? score
        : "you lost the game 💔" &
          (document.querySelector("body").style.backgroundColor =
            "rgb(118, 14, 14)");
  }
});

document.querySelector(".again").addEventListener("click", () => {
  number = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
});
