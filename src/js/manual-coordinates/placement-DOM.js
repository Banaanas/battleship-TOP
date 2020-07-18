import placement from "./manual-coordinates";

const carrierChoice = document.querySelector("#carrier-choice");
const battleshipChoice = document.querySelector("#battleship-choice");
const destroyerChoice = document.querySelector("#destroyer-choice");
const submarineChoice = document.querySelector("#submarine-choice");
const patrolBoatChoice = document.querySelector("#patrol-boat-choice");
const rotateShipButton = document.querySelector("#rotate-ship-button");
const testClick = document.querySelector("h1");

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

const shipChoiceDOM = (gamebrdObj, gamebrdCases) => {
  carrierChoice.addEventListener("click", () => {
    placement.shipLength = 5;
    placement.allShipsIndex = 0;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });
  battleshipChoice.addEventListener("click", () => {
    placement.shipLength = 4;
    placement.allShipsIndex = 1;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });
  destroyerChoice.addEventListener("click", () => {
    placement.shipLength = 3;
    placement.allShipsIndex = 2;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });
  submarineChoice.addEventListener("click", () => {
    placement.shipLength = 3;
    placement.allShipsIndex = 3;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });
  patrolBoatChoice.addEventListener("click", () => {
    placement.shipLength = 2;
    placement.allShipsIndex = 4;
    setSpectralShipProcess(gamebrdObj, gamebrdCases);
  });
  rotateShipButton.addEventListener("click", () => {
    if (placement.orientation === "horizontal") {
      placement.orientation = "vertical";
    } else {
      placement.orientation = "horizontal";
    }
  });

  testClick.addEventListener("click", () => {
    console.log(placement);
  });
};

export default shipChoiceDOM;
