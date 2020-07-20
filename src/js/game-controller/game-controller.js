import renderGameboard from "../game-DOM/render-gameboard";

// Control the game process
const gameController = (humanGameboard, computerGameboard) => {
  // Select each gameboard's cases (100 cases/gameboard)
  const computerGameboardCases = document.querySelectorAll("#computer-gameboard .gameboard-array");
  const humanGameboardCases = document.querySelectorAll("#human-gameboard-grid-container .gameboard-array");

  // Add eventListener for each computer's gameboard's case
  computerGameboardCases.forEach((computerGridCase, index) => {
    computerGridCase.addEventListener("click", () => {
      // Check if there is a already a winner, Return
      if (humanGameboard.battleDefeat === true || computerGameboard.battleDefeat === true) {
        console.log("There is a winner");
        return;
      }
      // Human Navy Attack
      if (humanGameboard.previousAttacks.length < 100) {
        computerGameboard.receiveAttack(index, humanGameboard);
        renderGameboard(computerGameboard, computerGameboardCases);
      }

      // Check if the human attack was a duplicate one. If it was, then return to
      // launch another no duplicated human strike
      if (computerGameboard.duplicateStrike === true) { return; }

      // Computer Navy Attack
      if (computerGameboard.previousAttacks.length < 100) {
        humanGameboard.receiveAttack(computerGameboard.randomPlay(), computerGameboard);
        renderGameboard(humanGameboard, humanGameboardCases);
      }
    });
  });
};

export default gameController;
