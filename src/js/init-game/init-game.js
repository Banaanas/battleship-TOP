// Create Human and Computer's navies
import Ship from "../ship-factory/ships-factory";
import renderInitGameboard from "../game-DOM/render-init-gameboard";
import Gameboard from "../gameboard-factory/gameboard-factory";
import gameController from "../game-controller/game-controller";

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

  // Create human and computer gameboards
  const humanGameboard = Gameboard();
  const computerGameboard = Gameboard();

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

  // Set coordinates for human ships
  humanGameboard.allShips[0].coords = [0, 1, 2, 3, 4];
  humanGameboard.allShips[1].coords = [50, 60, 70, 80];
  humanGameboard.allShips[2].coords = [67, 68, 69];
  humanGameboard.allShips[3].coords = [97, 98, 99];
  humanGameboard.allShips[4].coords = [18, 28, 38];

  // Place human ships on the gameboard
  humanGameboard.allShips.forEach((ship) => {
    humanGameboard.placeShip(ship);
  });

  // Set coordinates for computer ships
  computerGameboard.allShips[0].coords = [25, 26, 27, 28, 29];
  computerGameboard.allShips[1].coords = [30, 40, 50, 60];
  computerGameboard.allShips[2].coords = [67, 68, 69];
  computerGameboard.allShips[3].coords = [84, 85, 86];
  computerGameboard.allShips[4].coords = [1, 2, 3];

  // Place computer ships on the gameboard
  computerGameboard.allShips.forEach((ship) => {
    computerGameboard.placeShip(ship);
  });

  // Select each gameboard's cases (100 cases/gameboard)
  const humanGameboardCases = document.querySelectorAll("#human-gameboard .gameboard-array");
  const computerGameboardCases = document.querySelectorAll("#computer-gameboard .gameboard-array");

  // Render both gameboards
  renderInitGameboard(humanGameboard, humanGameboardCases);
  renderInitGameboard(computerGameboard, computerGameboardCases);

  // Control the game
  gameController(humanGameboard, computerGameboard);
};

export default initGame;
