let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Piedra";
  if (letter === "p") return "Papel";
  return "Tijeras";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "Usuario".fontsize(3).sup();
  const smallCompWord = "Comput".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} has Vencido a ${convertToWord(
    computerChoice
  )}${smallCompWord}. ¡Tú Ganas!🔥"`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 400);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "Usuario".fontsize(3).sup();
  const smallCompWord = "Comput".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} te ha Vencido ${convertToWord(
    computerChoice
  )}${smallCompWord}. ¡Tú Pierdes!😭"`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 400);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "Usuario".fontsize(3).sup();
  const smallCompWord = "Comput".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} es igual a ${convertToWord(
    computerChoice
  )}${smallCompWord}. ¡Es un Empate! 😒"`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 400);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();
