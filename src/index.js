// Import core.js
import "core-js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";
import initGame from "./js/init-game/init-game";

initGame();

const randomCoordinates = (shipLength) => {
  let randomFirstCoord;
  do {
    randomFirstCoord = Math.floor(Math.random() * 10);
  } while ((randomFirstCoord + (shipLength - 1)) >= 10);

  const coordsArr = [];

  console.log(shipLength);
  for (let index = 0; index < shipLength; index++) {
    coordsArr.push(index);
  }
  return coordsArr;
};

// eslint-disable-next-line no-console
console.log(randomCoordinates(5));

/*
  Carrier - 5
  Battleship - 4
  Destroyer - 3
  Submarine - 3
  Patrol Boat - 2
*/

/*
* Random Placement;
* Modal explaining rules;
* grid gap
* CSS - min width pour les grids
* CSS - regarder du côté de flex-grow / shrink
* Epurer toutes les fonctions non utilisées
* */
