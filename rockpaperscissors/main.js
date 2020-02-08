window.addEventListener("DOMContentLoaded", start);

//defining the score numbers
let p1score = 0;
let p2score = 0;

const updateScore = () => {
  const player1score = document.querySelector(".player1-score");
  const player2score = document.querySelector("player2-score");
  player1score.textContent = p1score;
  player2score.textContent = p2score;
};

function start() {
  setupButtons();
}

function setupButtons() {
  // no matter which button is clicked, removes all classes from players
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
      // clicked button gets a class
      button.classList.add("active");

      document.getElementById("player1").classList.add("shake");
      document.getElementById("player2").classList.add("shake");

      document.getElementById("player1").classList.remove("scissors");
      document.getElementById("player1").classList.remove("rock");
      document.getElementById("player1").classList.remove("paper");
      document.getElementById("player2").classList.remove("scissors");
      document.getElementById("player2").classList.remove("rock");
      document.getElementById("player2").classList.remove("paper");
      document.getElementById("win").classList.add("hidden");
      document.getElementById("lose").classList.add("hidden");
      document.getElementById("draw").classList.add("hidden");

      setTimeout(playerChoice, 1700);
    });
  });
}

function playerChoice() {
  //removes shake class
  document.getElementById("player1").classList.remove("shake");
  document.getElementById("player2").classList.remove("shake");

  //clicked button gets different class
  if (document.querySelector(".rock").classList.contains("active")) {
    document.getElementById("player1").classList.add("rock");
  } else if (document.querySelector(".paper").classList.contains("active")) {
    document.getElementById("player1").classList.add("paper");
  } else {
    document.getElementById("player1").classList.add("scissors");
  }
  computerChoice();
}

function computerChoice() {
  // removes the class from the button
  document.querySelectorAll("button").forEach(button => {
    button.classList.remove("active");
  });

  let computerChoose;

  const rand = Math.floor(Math.random() * 3);

  const choices = ["rock", "paper", "scissors"];

  computerChoose = choices[rand];

  //depending on computer choice, takes the correct img
  if (rand == 0) {
    console.log(computerChoose);
    computerChoose = "rock";
    document.getElementById("player2").classList.add("rock");
  } else if (rand == 1) {
    console.log(computerChoose);
    computerChoose = "paper";
    document.getElementById("player2").classList.add("paper");
  } else {
    console.log(computerChoose);
    computerChoose = "scissors";
    document.getElementById("player2").classList.add("scissors");
  }

  // all the possibilities for playing the game, show win , loose, or draw

  if (
    rand == 0 &&
    document.getElementById("player1").classList.contains("rock")
  ) {
    document.getElementById("draw").classList.remove("hidden");
  } else if (
    rand == 0 &&
    document.getElementById("player1").classList.contains("paper")
  ) {
    document.getElementById("win").classList.remove("hidden");
    p1score++;
    updateScore();
  } else if (
    rand == 0 &&
    document.getElementById("player1").classList.contains("scissors")
  ) {
    document.getElementById("lose").classList.remove("hidden");
    p2score++;
    updateScore();
  } else if (
    rand == 1 &&
    document.getElementById("player1").classList.contains("scissors")
  ) {
    document.getElementById("win").classList.remove("hidden");
    p1score++;
    updateScore();
  } else if (
    rand == 1 &&
    document.getElementById("player1").classList.contains("paper")
  ) {
    document.getElementById("draw").classList.remove("hidden");
  } else if (
    rand == 1 &&
    document.getElementById("player1").classList.contains("rock")
  ) {
    document.getElementById("lose").classList.remove("hidden");
    p2score++;
    updateScore();
  } else if (
    rand == 2 &&
    document.getElementById("player1").classList.contains("rock")
  ) {
    document.getElementById("win").classList.remove("hidden");
    p1score++;
    updateScore();
  } else if (
    rand == 2 &&
    document.getElementById("player1").classList.contains("paper")
  ) {
    document.getElementById("lose").classList.remove("hidden");
    p2score++;
    updateScore();
  } else {
    document.getElementById("draw").classList.remove("hidden");
  }
}
