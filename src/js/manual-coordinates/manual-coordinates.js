import renderInitGameboard from "../game-DOM/render-init-gameboard";
import elementsDOM from "../game-DOM/elements-DOM";
import { displayClickStartButtonMessage, waitMessage } from "../game-DOM/game-messages";
// import gameController from "../game-controller/game-controller";

/** * Placement Object ** */
const placement = {
  // When shipPlaced is true, it blocks the spectral ship (when case is hovered)
  // to appear. It also block the click Event Listener setShipCoordinates to happen.
  // This last one is attached every time a case is hovered. So when a case was hovered
  // multiple times, then clicked, a same ship was also attached multiple times.
  // shipsToPlace reached 0 faster than normal (because of the -1 subtraction
  // happening multiple times) and the game started without other ships been
  // located. Also it blocks setShipCoordinates to happen, and the same ship from
  // being placed after it already has been.
  shipPlaced: false,
  orientation: "horizontal",
  shipsToPlace: 5, // How many ships remain to place
  // Store the clicked ship's name, to make it invisible when ship's been placed
  shipDOMSelected: undefined,
  shipLength: undefined, // length of the ship
  // Determine the index of the ship inside the allShips array which is inside
  // the humangameboard object
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

  // Display start game button when all ships have been placed
  displayStartGameButton() {
    if (placement.shipsToPlace === 0) {
      // Remove event listener attached to computerGameboard during
      // manual placement phase ("Place all ships before" Message)
      elementsDOM.computerGameboardCases.forEach((item) => {
        item.removeEventListener("click", waitMessage);
      });

      // Create the <button> element
      const startGameButton = document.createElement("button");
      startGameButton.setAttribute("id", "start-game-button");
      startGameButton.innerHTML = "START THE GAME";

      // Remove the human navy div (where all DOM ships were)
      elementsDOM.allShips.forEach((item) => {
        item.remove();
      });

      // Remove shipChoices div and Rotate Ship Button
      elementsDOM.shipChoices.remove();
      elementsDOM.rotateShipButton.remove();

      // Attach the startGameButton where Rotate Ship Button was
      elementsDOM.humanNavy.insertBefore(startGameButton, elementsDOM.resetGameButton);

      // Add Event Listener - After startGameButton appears but not clicked,
      // ask to click startGameButton if User clicks on the computer gameboard
      displayClickStartButtonMessage();
    }
  },

  // Deleted previous gameboard (all cases) and create a new one
  // This way, all event listeners previously attached to all grid cases
  // are erased (too complicated to removeEventListener for everyone of them
  // because of nested addEventListeners - and displaySpectralShip and
  // setShipCoordinates needed only 1 event listener / case).
  renewGridCases(gameboardObj) {
    elementsDOM.humanGameboardGridContainer.innerHTML = "";
    elementsDOM.humanGameboardGridContainer.innerHTML = elementsDOM.gridHTML;
    const humanGameboardCases = document.querySelectorAll("#human-gameboard-grid-container .gameboard-array");
    // Display already placed ships
    renderInitGameboard(gameboardObj, humanGameboardCases);
  },

  // Set the ship's coordinates when gameboard case clicked
  setShipCoordinates(gameboardObj, ship, coordsArr) {
    if (this.shipPlaced === true) return; // Return if ship already placed
    gameboardObj.allShips[ship].coords = coordsArr;
    // Place each ship present in the allShips array
    gameboardObj.allShips.forEach((gameboardShip) => {
      gameboardObj.placeShip(gameboardShip);
    });
    // Hide the DOM Ship choice
    this.shipDOMSelected.style.visibility = "hidden";
    // If no more ships to place, hide rotate ship button
    this.shipsToPlace -= 1;
    this.displayStartGameButton();

    // Set shipPlaced to true
    this.shipPlaced = true;

    // Change pointer cursor to default cursor on all human gameboard cases
    const humanGameboardCases = document.querySelectorAll(
      "#human-gameboard-grid-container .gameboard-array"
    );
    humanGameboardCases.forEach((item) => {
      item.style.cursor = "default";
    });
  },

  // Display a spectral ship after the player clicked on one DOM Ship choice
  displaySpectralShip(shipRangeMinNumber, gameboardObj) {
    // Return if the ship has already been placed (click)
    // This way, the spectral ship does'nt appear anymore after
    // ship has been placed
    if (placement.shipPlaced === true) return;

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
      // eslint-disable-next-line no-plusplus
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
      const humanGameboardCases = document.querySelectorAll(
        "#human-gameboard-grid-container .gameboard-array"
      );
      humanGameboardCases.forEach((item, index) => {
        if ((index >= shipRangeMinNumber) && (index < shipRangeMinNumber + this.shipLength)) {
          item.style.backgroundColor = "var(--primary-dark-color)";
        }
      });
    }

    /** VERTICAL SPECTRAL SHIP */
    if (placement.orientation === "vertical") {
      const shipRangeMaxNumber = shipRangeMinNumber + ((this.shipLength - 1) * 10);

      if (shipRangeMaxNumber > 99) return;

      // Push horizontal spectralShip coords into array
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
        const humanGameboardCases = document.querySelectorAll(
          "#human-gameboard-grid-container .gameboard-array"
        );
        humanGameboardCases[index].style.backgroundColor = "var(--primary-dark-color)";
      }
    }

    // Add Ship's Placement Event Listener IF SPECTRAL SHIP WAS DISPLAYED
    // If ship was not displayed, it means ship placement was not possible
    const humanGameboardCases = document.querySelectorAll(
      "#human-gameboard-grid-container .gameboard-array"
    );
    humanGameboardCases[shipRangeMinNumber].addEventListener("click", () => {
      this.setShipCoordinates(gameboardObj, this.allShipsIndex, spectralShipCoords);
    });
  },

  // Make spectral ship disappear when mouse get out of the case
  eraseSpectralShip(gbrdObj, gbrdCases) {
    const humanGameboardCases = document.querySelectorAll(
      "#human-gameboard-grid-container .gameboard-array"
    );
    humanGameboardCases.forEach((item) => {
      item.style.backgroundColor = "var(--primary-light-color)";
    });
    renderInitGameboard(gbrdObj, gbrdCases);
  },
};

export default placement;
