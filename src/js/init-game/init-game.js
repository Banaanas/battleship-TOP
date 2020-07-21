// Create Human and Computer's navies
import Ship from "../ship-factory/ships-factory";
import renderInitGameboard from "../game-DOM/render-init-gameboard";
import Gameboard from "../gameboard-factory/gameboard-factory";
import getRandomNavy from "../random-coordinates/random-coordinates";
import shipChoice from "../manual-coordinates/placement";
import elementsDOM from "../game-DOM/elements-DOM";
import gameController from "../game-controller/game-controller";

// Create human and computer gameboards
const humanGameboard = Gameboard();
const computerGameboard = Gameboard();

// Initialize Battleship Game
const initGame = () => {
  // Create humanNavy
  const humanNavy = {
    carrier: Ship(5),
    battleship: Ship(4),
    destroyer: Ship(3),
    submarine: Ship(3),
    patrolBoat: Ship(2),
  };

  // Create computerNavy
  const computerNavy = {
    carrier: Ship(5),
    battleship: Ship(4),
    destroyer: Ship(3),
    submarine: Ship(3),
    patrolBoat: Ship(2),
  };

  /* // Create human and computer gameboards
  const humanGameboard = Gameboard();
  const computerGameboard = Gameboard(); */

  // Push humanNavy's ships into humanGameboard's allships array
  const humanNavyArray = Object.values(humanNavy);
  humanNavyArray.forEach((ship) => {
    humanGameboard.allShips.push(ship);
  });

  // Push computerNavy's ships into humanGameboard's allships array
  const computerNavyArray = Object.values(computerNavy);
  computerNavyArray.forEach((ship) => {
    computerGameboard.allShips.push(ship);
  });

  // Set random coordinates for computer ships
  const randomNavyCoords = getRandomNavy();
  computerGameboard.allShips[0].coords = randomNavyCoords.carrier.coords;
  computerGameboard.allShips[1].coords = randomNavyCoords.battleship.coords;
  computerGameboard.allShips[2].coords = randomNavyCoords.submarine.coords;
  computerGameboard.allShips[3].coords = randomNavyCoords.destroyer.coords;
  computerGameboard.allShips[4].coords = randomNavyCoords.patrolBoat.coords;

  // Place computer ships on the gameboard
  computerGameboard.allShips.forEach((ship) => {
    computerGameboard.placeShip(ship);
  });

  // Select each gameboard's cases (100 cases/gameboard)
  const { humanGameboardCases, computerGameboardCases } = elementsDOM;

  // Render both gameboards
  renderInitGameboard(humanGameboard, humanGameboardCases);
  renderInitGameboard(computerGameboard, computerGameboardCases);

  // Set the DOM Ship Choice (click on one ship's name to place it on the gameboard)
  shipChoice(humanGameboard);

  // Add Event Listener to future created Start Game Button
  // Event Listener : Control the game
  elementsDOM.humanAside.addEventListener("click", (event) => {
    const { target } = event; // Object destructuring
    if (target.id !== "start-game-button") return;
    gameController(humanGameboard, computerGameboard);
  });
};

export default initGame;
