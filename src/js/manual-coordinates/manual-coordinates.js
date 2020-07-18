import renderInitGameboard from "../game-DOM/render-init-gameboard";

const placement = {
  shipsToPlace: 5, // How many ships remain to place
  orientation: "horizontal",
  shipLength: 3,
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

  navyLength: {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolBoat: 2,
  },

  // Select each gameboard's cases (100 cases/gameboard)
  humanGameboardCases: document.querySelectorAll("#human-gameboard .gameboard-array"),

  getSpectralShip(shipRangeMinNumber, gameboardObj) {
    console.log(gameboardObj);
    // Determine the range index within numbersRanges array in order to, finally, determine
    // the rangeNumbers
    const rangeIndex = Math.floor(shipRangeMinNumber / 10);
    const shipRange = this.numbersRanges[rangeIndex];

    if (placement.orientation === "horizontal") {
      // Max number range is the maximum possible for horizontal moves
      const shipRangeMaxNumber = shipRange[1];

      // Return if maximum exceeded
      if ((shipRangeMaxNumber - shipRangeMinNumber) < (this.shipLength - 1)) return;

      //
      // Display horizontal spectral ship if maximum not exceeded
      this.humanGameboardCases.forEach((item, index) => {
        if ((index >= shipRangeMinNumber) && (index < shipRangeMinNumber + this.shipLength)) {
          item.style.backgroundColor = "red";
        }
      });
    }

    if (placement.orientation === "vertical") {
      const shipRangeMaxNumber = shipRangeMinNumber + ((this.shipLength - 1) * 10);

      if (shipRangeMaxNumber > 99) return;

      // Display vertical spectral ship if maximum not exceeded
      for (let index = shipRangeMinNumber; index <= shipRangeMaxNumber; index += 10) {
        this.humanGameboardCases[index].style.backgroundColor = "red";
      }
    }
  },

  eraseSpectralShip(gbrdObj, gbrdCases) {
    this.humanGameboardCases.forEach((item) => {
      item.style.backgroundColor = "var(--primary-light-color)";
    });
    renderInitGameboard(gbrdObj, gbrdCases);
  },

};

export default placement;

/*
import renderInitGameboard from "../game-DOM/render-init-gameboard";

const placement = {
  shipsToPlace: 5, // How many ships remain to place
  orientation: "horizontal",
  shipLength: 3,
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

  navyLength: {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolBoat: 2,
  },

  // Select each gameboard's cases (100 cases/gameboard)
  humanGameboardCases: document.querySelectorAll("#human-gameboard .gameboard-array"),

  getSpectralShip(shipRangeMinNumber, gameboardObj) {
    console.log(gameboardObj);
    // Determine the range index within numbersRanges array in order to, finally, determine
    // the rangeNumbers
    const rangeIndex = Math.floor(shipRangeMinNumber / 10);
    const shipRange = this.numbersRanges[rangeIndex];

    if (placement.orientation === "horizontal") {
      // Max number range is the maximum possible for horizontal moves
      const shipRangeMaxNumber = shipRange[1];

      // Return if maximum exceeded
      if ((shipRangeMaxNumber - shipRangeMinNumber) < (this.shipLength - 1)) return;

      //
      // Display horizontal spectral ship if maximum not exceeded
      this.humanGameboardCases.forEach((item, index) => {
        if ((index >= shipRangeMinNumber) && (index < shipRangeMinNumber + this.shipLength)) {
          item.style.backgroundColor = "red";
        }
      });
    }

    if (placement.orientation === "vertical") {
      const shipRangeMaxNumber = shipRangeMinNumber + ((this.shipLength - 1) * 10);

      if (shipRangeMaxNumber > 99) return;

      // Display vertical spectral ship if maximum not exceeded
      for (let index = shipRangeMinNumber; index <= shipRangeMaxNumber; index += 10) {
        this.humanGameboardCases[index].style.backgroundColor = "red";
      }
    }
  },

  eraseSpectralShip(gbrdObj, gbrdCases) {
    this.humanGameboardCases.forEach((item) => {
      item.style.backgroundColor = "var(--primary-light-color)";
    });
    renderInitGameboard(gbrdObj, gbrdCases);
  },

};

export default placement;
*/
