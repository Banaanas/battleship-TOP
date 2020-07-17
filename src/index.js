// Import core.js
import "core-js";
import "regenerator-runtime/runtime";
// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";
import initGame from "./js/init-game/init-game";

initGame();

/*
* Random Placement;
* Modal explaining rules;
* grid gap
* CSS - min width pour les grids
* CSS - regarder du côté de flex-grow / shrink
* Epurer toutes les fonctions non utilisées
* */

/*

const numbersRanges = [
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
];
const orientation = "horizontal";
const humanGameboardCases = document.querySelectorAll("#human-gameboard .gameboard-array");

const navyLength = {
  carrier: 5,
  battleship: 4,
  destroyer: 3,
  submarine: 3,
  patrolBoat: 2,
};

const phantomShip = (indexhoveredCase) => {
  // Determine range
  const rangeIndex = Math.floor(indexhoveredCase / 10);
  const carrierRange = numbersRanges[rangeIndex];
  const carrierRangeMaxNumber = carrierRange[1];
  if ((carrierRangeMaxNumber - indexhoveredCase) < 4) return;
  humanGameboardCases.forEach((item, index) => {
    if ((index >= indexhoveredCase) && (index < indexhoveredCase + 5)) {
      item.style.backgroundColor = "red";
    }
  });
};

const outPhantomShip = () => {
  humanGameboardCases.forEach((item, index) => {
    item.style.backgroundColor = "pink";
  });
};

humanGameboardCases.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    phantomShip(index);
  });
  item.addEventListener("mouseout", () => {
    outPhantomShip();
  });
});
*/
