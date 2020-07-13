// Create Human and Computer's navies
import Ship from "../ship-factory/ships-factory";

const initGame = () => {
  const humanNavy = {
    carrier: Ship(5),
    battleship: Ship(4),
    destroyer: Ship(3),
    submarine: Ship(3),
    patrolBoat: Ship(2),
  };

  const computerNavy = {
    carrier: Ship(5),
    battleship: Ship(4),
    destroyer: Ship(3),
    submarine: Ship(3),
    patrolBoat: Ship(2),
  };

  // Set computer's ships coordinates

  return computerNavy;
};

export default initGame;

/*
  Carrier - 5
  Battleship - 4
  Destroyer - 3
  Submarine - 3
  Patrol Boat - 2
*/
