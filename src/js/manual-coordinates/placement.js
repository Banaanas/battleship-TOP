import placement from "./manual-coordinates";
import elementsDOM from "../game-DOM/elements-DOM";

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
  elementsDOM.carrier.addEventListener("click", () => {
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll("#human-gameboard-grid-container .gameboard-array");
    placement.clickAgain = false;
    placement.shipDOMSelected = elementsDOM.carrier;
    placement.shipLength = 5;
    placement.allShipsIndex = 0;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  // Battleship event listener
  elementsDOM.battleship.addEventListener("click", () => {
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll("#human-gameboard-grid-container .gameboard-array");
    placement.clickAgain = false;
    placement.shipDOMSelected = elementsDOM.battleship;
    placement.shipLength = 4;
    placement.allShipsIndex = 1;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  // Destroyer event listener
  elementsDOM.destroyer.addEventListener("click", () => {
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll("#human-gameboard-grid-container .gameboard-array");
    placement.clickAgain = false;
    placement.shipDOMSelected = elementsDOM.destroyer;
    placement.shipLength = 3;
    placement.allShipsIndex = 2;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  // Submarine event listener
  elementsDOM.submarine.addEventListener("click", () => {
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll("#human-gameboard-grid-container .gameboard-array");
    placement.clickAgain = false;
    placement.shipDOMSelected = elementsDOM.submarine;
    placement.shipLength = 3;
    placement.allShipsIndex = 3;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  // Patrol Boat event listener
  elementsDOM.patrolBoat.addEventListener("click", () => {
    placement.renewGridCases(gamebrdObj);
    const gamebrdCases = document.querySelectorAll("#human-gameboard-grid-container .gameboard-array");
    placement.clickAgain = false;
    placement.shipDOMSelected = elementsDOM.patrolBoat;
    placement.shipLength = 2;
    placement.allShipsIndex = 4;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
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
