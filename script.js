window.addEventListener("DOMContentLoaded", start);

let userChoice = "";
let computerChoice = "";

function start() {
  console.log("start");

  document.querySelector(".rock").addEventListener("click", function () {
    getPlayerChoice("rock");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
  });

  document.querySelector(".paper").addEventListener("click", function () {
    getPlayerChoice("paper");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
  });

  document.querySelector(".scissors").addEventListener("click", function () {
    getPlayerChoice("scissors");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
  });
}
function getPlayerChoice(choice1) {
  console.log("getPlayerChoice(" + choice1 + ")");
  makeRandomComputerChoice();

  const choice2 = makeRandomComputerChoice();
  showAnimations(choice1, choice2);
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  console.log(computerChoice);
  return computerChoice;
}

function showAnimations(choice1, choice2) {
  console.log("showAnimations(" + choice1 + "," + choice2 + ")");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  shaketostatic(1, choice1);
  shaketostatic(2, choice2);

  document
    .querySelector("#player1")
    .addEventListener("animationend", function () {
      determineWinner(choice1, choice2);
    });
}

function shaketostatic(player, choice) {
  if (choice === "rock") {
    document
      .querySelector("#player" + player)
      .addEventListener("animationend", function () {
        document.querySelector("#player" + player).classList.remove("shake");
        document.querySelector("#player" + player).classList.add("rock");
      });
  } else if (choice === "paper") {
    document
      .querySelector("#player" + player)
      .addEventListener("animationend", function () {
        document.querySelector("#player" + player).classList.remove("shake");
        document.querySelector("#player" + player).classList.add("paper");
      });
  } else if (choice === "scissors") {
    document
      .querySelector("#player" + player)
      .addEventListener("animationend", function () {
        document.querySelector("#player" + player).classList.remove("shake");
        document.querySelector("#player" + player).classList.add("scissors");
      });
  }
}

function determineWinner(userChoice, computerChoice) {
  console.log("determineWinner(" + userChoice + "," + computerChoice + ")");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  if (computerChoice === userChoice) {
    showDraw();
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    showWin();
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    showLose();
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    showWin();
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    showLose();
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    showWin();
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    showLose();
  }
}

function showWin() {
  console.log("showWin");

  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  console.log("showLose");

  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("showDraw");

  document.querySelector("#draw").classList.remove("hidden");
}
