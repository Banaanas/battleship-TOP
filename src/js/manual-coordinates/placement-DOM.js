import placement from "./manual-coordinates";

const carrierChoice = document.querySelector("#carrier-choice");
const battleshipChoice = document.querySelector("#battleship-choice");
const destroyerChoice = document.querySelector("#destroyer-choice");
const submarineChoice = document.querySelector("#submarine-choice");
const patrolBoatChoice = document.querySelector("#patrol-boat-choice");
const rotateShipButton = document.querySelector("#rotate-ship-button");
const testClick = document.querySelector("h1");

const shipChoiceDOM = () => {
  carrierChoice.addEventListener("click", () => {
    placement.shipLength = 5;
  });
  battleshipChoice.addEventListener("click", () => {
    placement.shipLength = 4;
  });
  destroyerChoice.addEventListener("click", () => {
    placement.shipLength = 3;
  });
  submarineChoice.addEventListener("click", () => {
    placement.shipLength = 3;
  });
  patrolBoatChoice.addEventListener("click", () => {
    placement.shipLength = 2;
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
