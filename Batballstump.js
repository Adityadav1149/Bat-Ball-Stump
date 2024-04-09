let scoreStr = localStorage.getItem("Score");
let Score;
resetScore();

function resetScore(scoreStr) {
  Score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  Score.displayResult = function () {
    return `Score: Win = ${Score.win}, Lost = ${Score.lost}, Tie = ${Score.tie}`;
  };

  getresultMsg();
}

// if (scoreStr !== undefined) {
//   Score = JSON.parse(scoreStr);
// } else {
//   Score = {

//   };
// }

function randomComputerChoise() {
  let randomNum = Math.random() * 3;

  if (randomNum > 0 && randomNum <= 1) {
    return "Bat";
  } else if (randomNum > 1 && randomNum <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      Score.win++;
      return `You won match`;
    } else if (computerMove === "Stump") {
      Score.lost++;
      return `Computer won match`;
    } else {
      Score.tie++;
      return `Match tie!`;
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Bat") {
      Score.lost++;
      return `Computer won match`;
    } else if (computerMove === "Stump") {
      Score.win++;
      return `You won match`;
    } else {
      Score.tie++;
      return `match tie`;
    }
  } else {
    if (computerMove === "Ball") {
      Score.lost++;
      return `computer won match`;
    } else if (computerMove === "Bat") {
      Score.win++;
      return `You won match`;
    } else {
      Score.tie++;
      return `Match tie`;
    }
  }
}

function getresultMsg(userMove, computerMove, result) {
  localStorage.setItem("Score", JSON.stringify(Score));

  document.querySelector("#user-move").innerText = userMove
    ? `You choose ${userMove}`
    : "";

  document.querySelector("#computer-move").innerText =
    computerMove !== undefined ? `Computer choose ${computerMove}` : "";

  document.querySelector("#result").innerText = result || "";
  document.querySelector("#score").innerText = Score.displayResult();
}
