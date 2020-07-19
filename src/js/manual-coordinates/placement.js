import placement from "./manual-coordinates";
import shipSelector from "../game-DOM/ship-choice";

const setSpectralShipProcess = (gamebrdObj, gamebrdCases) => {
  gamebrdCases.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      placement.displaySpectralShip(index, gamebrdObj);
    });

    item.addEventListener("mouseleave", () => {
      placement.eraseSpectralShip(gamebrdObj, gamebrdCases);
    });
  });
};

const shipChoice = (gamebrdObj, gamebrdCases) => {
  shipSelector.carrier.addEventListener("click", () => {
    // placement.clickAgain = false;
    placement.shipLength = 5;
    placement.allShipsIndex = 0;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  shipSelector.battleship.addEventListener("click", () => {
    placement.shipLength = 4;
    placement.allShipsIndex = 1;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  shipSelector.destroyer.addEventListener("click", () => {
    placement.shipLength = 3;
    placement.allShipsIndex = 2;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  shipSelector.submarine.addEventListener("click", () => {
    placement.shipLength = 3;
    placement.allShipsIndex = 3;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  shipSelector.patrolBoat.addEventListener("click", () => {
    placement.shipLength = 2;
    placement.allShipsIndex = 4;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });

  shipSelector.rotateShipButton.addEventListener("click", () => {
    if (placement.orientation === "horizontal") {
      placement.orientation = "vertical";
    } else {
      placement.orientation = "horizontal";
    }
  });

  shipSelector.titleTest.addEventListener("click", () => {
    console.log(placement);
  });
};

export default shipChoice;
