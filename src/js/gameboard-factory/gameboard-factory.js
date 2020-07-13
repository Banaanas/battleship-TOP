const Gameboard = () => ({
  gameGrid: Array(100).fill(false),
  allShips: [],
  missedShots: [],
  placeShip(ship) {
    // eslint-disable-next-line no-restricted-syntax
    for (const coord of ship.coords) {
      if (this.gameGrid[coord] === true) { // If case already occupied, can't place ship
        return;
      }
    }
    ship.coords.forEach((coord) => { // Place the ship
      this.gameGrid[coord] = true;
      return this.gameGrid;
    });
  },
  receiveAttack(coord) {
    if (this.gameGrid[coord] === true) { // There is a ship - Occupied Case
      // eslint-disable-next-line no-restricted-syntax
      for (const ship of this.allShips) {
        // eslint-disable-next-line no-restricted-syntax
        for (const coordinate of ship.coords) {
          if (coord === coordinate) {
            ship.hit(coord);
            return;
          }
        }
      }
    }
    this.missedShots.push(coord); // There is no ship - Empty case // Push into missedShots array
    // eslint-disable-next-line consistent-return
    return this.missedShots;
  },
  allShipsSunk() {
    // Compare length of all ships'coordinates arrays with all damages array length
    // If they are the same, then game is over
    let allCoords = 0;
    let allDamages = 0;
    this.allShips.forEach((ship) => {
      allCoords += ship.coords.length;
      allDamages += ship.damages.length;
    });

    if (allCoords === allDamages) return true; // Game is Over
    return false;
  },
});

export default Gameboard;
