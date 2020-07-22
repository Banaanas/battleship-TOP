import placement from "./manual-coordinates";
import elementsDOM from "../game-DOM/elements-DOM";
import toggleStyleSelectedShip from "../game-DOM/select-ship-style";

/** * Organize the way spectral ship appears and disappears ** */
const setSpectralShipProcess = (gamebrdObj, gamebrdCases) => {
  // For each of the 100 humangameboard'cases
  gamebrdCases.forEach((item, index) => {
    // Make spectral ship appear when mouse leave the gameboard case
    item.addEventListener("mouseenter", () => {
      placement.displaySpectralShip(index, gamebrdObj);
    });

    // Make spectral ship disappear when mouse leave the gameboard case
    item.addEventListener("mouseleave", () => {
      placement.eraseSpectralShip(gamebrdObj, gamebrdCases);
    });
  });
};

/** * Set Event Listeners (click) for all Ship Choices ** */
// Carrier event listener
const shipChoice = (gamebrdObj) => {
  // Set different CSS style for selected ship
  elementsDOM.allShips.forEach((item) => {
    item.addEventListener("click", () => {
      toggleStyleSelectedShip(item, elementsDOM.allShips);
    });
  });

  // Carrier Event listener
  elementsDOM.carrier.addEventListener("click", () => {
    placement.shipPlaced = false;
    placement.shipDOMSelected = elementsDOM.carrier;
    placement.shipLength = 5;
    placement.allShipsIndex = 0;
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll(
      "#human-gameboard-grid-container .gameboard-array"
    );
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
    gamebrdCases.forEach((item) => {
      item.style.cursor = "pointer";
    });
  });

  // Battleship event listener
  elementsDOM.battleship.addEventListener("click", () => {
    placement.shipPlaced = false;
    placement.shipDOMSelected = elementsDOM.battleship;
    placement.shipLength = 4;
    placement.allShipsIndex = 1;
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll(
      "#human-gameboard-grid-container .gameboard-array"
    );
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
    gamebrdCases.forEach((item) => {
      item.style.cursor = "pointer";
    });
  });

  // Destroyer event listener
  elementsDOM.destroyer.addEventListener("click", () => {
    placement.shipPlaced = false;
    placement.shipDOMSelected = elementsDOM.destroyer;
    placement.shipLength = 3;
    placement.allShipsIndex = 2;
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll(
      "#human-gameboard-grid-container .gameboard-array"
    );
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
    gamebrdCases.forEach((item) => {
      item.style.cursor = "pointer";
    });
  });

  // Submarine event listener
  elementsDOM.submarine.addEventListener("click", () => {
    placement.shipPlaced = false;
    placement.shipDOMSelected = elementsDOM.submarine;
    placement.shipLength = 3;
    placement.allShipsIndex = 3;
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll(
      "#human-gameboard-grid-container .gameboard-array"
    );
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
    gamebrdCases.forEach((item) => {
      item.style.cursor = "pointer";
    });
  });

  // Patrol Boat event listener
  elementsDOM.patrolBoat.addEventListener("click", () => {
    placement.shipPlaced = false;
    placement.shipDOMSelected = elementsDOM.patrolBoat;
    placement.shipLength = 2;
    placement.allShipsIndex = 4;
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll(
      "#human-gameboard-grid-container .gameboard-array"
    );
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
    gamebrdCases.forEach((item) => {
      item.style.cursor = "pointer";
    });
  });

  // Change the spectral ship and real ship orientation
  elementsDOM.rotateShipButton.addEventListener("click", () => {
    if (placement.orientation === "horizontal") {
      placement.orientation = "vertical";
    } else {
      placement.orientation = "horizontal";
    }
  });
};

export default shipChoice;
