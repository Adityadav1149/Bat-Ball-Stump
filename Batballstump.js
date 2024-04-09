let computerChoise;
let computerChoiseMsg;

function randomComputerChoise() {
  let randomNum = Math.random() * 3;

  if (randomNum > 0 && randomNum <= 1) {
    computerChoise = "Bat";
    // console.log('computer choose Bat');
  } else if (randomNum > 1 && randomNum <= 2) {
    computerChoise = "Ball";
    // console.log('computer choose Ball');
  } else {
    computerChoise = "Stump";
    // console.log('computer choose stump');
  }
  // console.log(`Computer choose ${computerChoise}`)
  computerChoiseMsg = `Computer choose ${computerChoise}`;
}
