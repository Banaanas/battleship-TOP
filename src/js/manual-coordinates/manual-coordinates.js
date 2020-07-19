import renderInitGameboard from "../game-DOM/render-init-gameboard";

const placement = {
  clickAgain: false,
  shipsToPlace: 5, // How many ships remain to place
  orientation: "horizontal",
  shipLength: undefined,
  allShipsIndex: undefined,
  numbersRanges: [ // gameboard grid cases ranges
    [0, 9],
    [10, 19],
    [20, 29],
    [30, 39],
    [40, 49],
    [50, 59],
    [60, 69],
    [70, 79],
    [80, 89],
    [90, 99],
  ],

  // Select each gameboard's cases (100 cases/gameboard)
  humanGameboardCases: document.querySelectorAll("#human-gameboard .gameboard-array"),

  setShipCoordinates(gameboardObj, ship, coordsArr) {
    gameboardObj.allShips[ship].coords = coordsArr;
    gameboardObj.allShips.forEach((gameboardShip) => {
      gameboardObj.placeShip(gameboardShip);
    });
  },

  displaySpectralShip(shipRangeMinNumber, gameboardObj) {
    // Store the spectralShip coordinates
    const spectralShipCoords = [];

    // Determine the range index within numbersRanges array in order to, finally, determine
    // the rangeNumbers
    const rangeIndex = Math.floor(shipRangeMinNumber / 10);
    const shipRange = this.numbersRanges[rangeIndex];

    /** HORIZONTAL SPECTRAL SHIP */
    if (placement.orientation === "horizontal") {
      // Max number range is the maximum possible for horizontal moves
      const shipRangeMaxNumber = shipRange[1];

      // Return if maximum exceeded
      if ((shipRangeMaxNumber - shipRangeMinNumber) < (this.shipLength - 1)) return;

      // Push horizontal spectralShip coords into array
      for (let i = shipRangeMinNumber; i <= (shipRangeMinNumber + this.shipLength - 1); i++) {
        spectralShipCoords.push(i);
      }

      // Return if one of the spectralShip coords is already occupied by a real ship
      // eslint-disable-next-line no-restricted-syntax
      for (const coord of spectralShipCoords) {
        if (gameboardObj.gameGrid[coord] === true) {
          return;
        }
      }

      // Display horizontal spectral ship if maximum not exceeded and coords are not occupied
      this.humanGameboardCases.forEach((item, index) => {
        if ((index >= shipRangeMinNumber) && (index < shipRangeMinNumber + this.shipLength)) {
          item.style.backgroundColor = "red";
        }
      });
    }

    /** VERTICAL SPECTRAL SHIP */
    if (placement.orientation === "vertical") {
      const shipRangeMaxNumber = shipRangeMinNumber + ((this.shipLength - 1) * 10);

      if (shipRangeMaxNumber > 99) return;

      // Push horizontal spectralShip coords into array
      // eslint-disable-next-line max-len
      for (let i = shipRangeMinNumber; i
      <= (shipRangeMinNumber + ((this.shipLength - 1) * 10)); i += 10) {
        spectralShipCoords.push(i);
      }
      // Return if one of the spectralShip coords is already occupied by a real ship
      // eslint-disable-next-line no-restricted-syntax
      for (const coord of spectralShipCoords) {
        if (gameboardObj.gameGrid[coord] === true) {
          return;
        }
      }

      // Display vertical spectral ship if maximum not exceeded and coords are not occupied
      for (let index = shipRangeMinNumber; index <= shipRangeMaxNumber; index += 10) {
        this.humanGameboardCases[index].style.backgroundColor = "red";
      }
    }

    this.humanGameboardCases[shipRangeMinNumber].addEventListener("click", () => {
      this.setShipCoordinates(gameboardObj, this.allShipsIndex, spectralShipCoords);
      console.log(gameboardObj.gameGrid);
    });
  },

  eraseSpectralShip(gbrdObj, gbrdCases) {
    this.humanGameboardCases.forEach((item) => {
      item.style.backgroundColor = "var(--primary-light-color)";
    });
    renderInitGameboard(gbrdObj, gbrdCases);
  },

};

export default placement;
