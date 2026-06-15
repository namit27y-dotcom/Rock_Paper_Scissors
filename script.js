let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  //rock paper scissors
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("It's a draw");
  msg.innerText = "It's a draw! , Play Again";
  msg.style.backgroundColor = "#081b31";
};
const shoWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose!");
    msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //generate computer choice -->modular level programing
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Gamp
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors ,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock ,scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    shoWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
