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
      return `You won match`;
    } else if (computerMove === "Stump") {
      return `Computer won match`;
    } else {
      return `Match tie!`;
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Bat") {
      return `Computer won match`;
    } else if (computerMove === "Stump") {
      return `You won match`;
    } else {
      return `match tie`;
    }
  } else {
    if (computerMove === "Ball") {
      return `computer won match`;
    } else if (computerMove === "Bat") {
      return `You won match`;
    } else {
      return `Match tie`;
    }
  }
}

function getresultMsg(userMove, computerMove, result) {
  alert(`You choose ${userMove}, Computer choose ${computerMove}, ${result}.`);
}
