import elementsDOM from "../game-DOM/elements-DOM";
import { dontStrikeTwiceMessage } from "../game-DOM/game-messages";

const Gameboard = (playerName) => ({
  playerName,
  gameGrid: Array(100)
    .fill(false),
  allShips: [],
  missedShots: [],
  previousAttacks: [], // Store all enemy's previous attacks
  battleDefeat: false, // If true, there is a winner / loser / game is over
  duplicateStrike: false,
  allShipsSunk() { // check if all ships are sunk / there is a winner loser / game is over
    // Compare length of all ships'coordinates arrays with all damages array length
    // If they are the same, then game is over
    let allCoords = 0;
    let allDamages = 0;
    this.allShips.forEach((ship) => {
      allCoords += ship.coords.length;
      allDamages += ship.damages.length;
    });

    if (allCoords === allDamages) {
      this.battleDefeat = true;
      return true;
    } // Game is Over
    return false;
  },
  placeShip(ship) { // Place each ship on the gameboard with its coordinates
    // eslint-disable-next-line no-restricted-syntax
    for (const coord of ship.coords) {
      if (this.gameGrid[coord] === true) { // If case already occupied, can't place ship
        return;
      }
    }
    ship.coords.forEach((coord) => { // Place the ship on the grid
      this.gameGrid[coord] = true;
      return this.gameGrid;
    });
  },

  randomPlay() { // Random Number Choice for computer player
    // if previousAttacks === 100, it means all computer's moves have been played
    if (this.previousAttacks.length >= 100) {
      return false;
    }
    let computerChoice;
    // If the new generated computer's (random) choice has already been played before,
    // then repeat the function until a new random number is generated
    do {
      computerChoice = Math.floor(Math.random() * 100);
    } while (this.previousAttacks.includes(computerChoice));

    return computerChoice; // return the computer's random number
  },
  receiveAttack(coord, enemyBoard) { // Gameboard receiving attack
    this.duplicateStrike = false; // Reset duplicateStrike if modified before

    if (enemyBoard.previousAttacks.includes(coord)) {
      // displayDontStrikeTwiceMessage();
      dontStrikeTwiceMessage();
      // eslint-disable-next-line max-len
      this.duplicateStrike = true; // Make impossible for computer to play after human made a duplicate strike - cf. gameController
      return false;
    }

    /** At this point, there is no more duplicate attack (coord) possibility,
     *  so attack is launched * */

    // Store the strike in the enemyBoard's previousAttacks array
    enemyBoard.previousAttacks.push(coord);

    // Success : There is a ship  on the coordinate - Occupied Case
    if (this.gameGrid[coord] === true) {
      // eslint-disable-next-line no-restricted-syntax
      for (const ship of this.allShips) {
        // eslint-disable-next-line no-restricted-syntax
        for (const coordinate of ship.coords) {
          if (coord === coordinate) {
            ship.hit(coord); // hit function, generating damages on the ship

            // Check if game is over and display the Winner's Name
            if (this.allShipsSunk() === true) {
              elementsDOM.gameMessage.style.visibility = "visible";
              elementsDOM.gameMessage.textContent = `${enemyBoard.playerName} is the Winner`;
              elementsDOM.resetGameButton.textContent = " PLAY AGAIN";
            }
            return true;
          }
        }
      }
    }
    // Fail : There is no ship on the coordinate - Empty case // Push coord into missedShots array
    this.missedShots.push(coord);
    return this.missedShots;
  },
});

export default Gameboard;
