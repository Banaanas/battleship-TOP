import renderGameboard from "../game-DOM/render-gameboard";

// Create Promise
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Launch computer attack after some delay in ms
const asyncComputerAttack = async (humanGameboard, computerGameboard, humanGameboardCases) => {
  await delay(500);
  humanGameboard.receiveAttack(computerGameboard.randomPlay(), computerGameboard);
  renderGameboard(humanGameboard, humanGameboardCases);
};

// Control the game process
const gameController = (humanGameboard, computerGameboard) => {
  // Select each gameboard's cases (100 cases/gameboard)
  const computerGameboardCases = document.querySelectorAll("#computer-gameboard .gameboard-array");
  const humanGameboardCases = document.querySelectorAll(
    "#human-gameboard-grid-container .gameboard-array"
  );

  // Add eventListener for each computer's gameboard's case
  computerGameboardCases.forEach((computerGridCase, index) => {
    computerGridCase.addEventListener("click", () => {
      // Return, if there is a already a Winner - Game stops
      if (humanGameboard.battleDefeat === true || computerGameboard.battleDefeat === true) {
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

      // Asynchronous Computer Navy Attack
      if (computerGameboard.previousAttacks.length < 100) {
        asyncComputerAttack(humanGameboard, computerGameboard, humanGameboardCases);
      }
    });
  });
};

export default gameController;
