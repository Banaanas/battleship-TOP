// Import core.js
import "core-js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";
import initGame from "./js/init-game/init-game";

initGame();

const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numberRanges = [
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

// eslint-disable-next-line no-unused-vars
const randomCoordinates = (shipLength, orientation) => {
  // Return undefined if shipLength is greater than 5 cases
  if (shipLength > 5) {
    console.log("Ship length can not exceed 5 cases");
    return;
  }

  let randomFirstCoord;
  let randomLastCoord;

  // Chose one range randomly
  const randomNumber = Math.floor(Math.random() * 10);
  const randomRange = numberRanges[randomNumber];
  const [minRangeNumb, maxRangeNumb] = randomRange;
  console.log(randomRange);

  // Generate Random Coordinates which can't exceed the end of the range
  do {
    randomFirstCoord = getRandomInt(minRangeNumb, maxRangeNumb);
    randomLastCoord = randomFirstCoord + (shipLength - 1);
    // Last coordinate must not exceed the end of the horizontal range
  } while (randomLastCoord > (maxRangeNumb));

  /*
  // Generate Random Coordinates which can't exceed the end of the range
  do {
    randomFirstCoord = Math.floor(Math.random() * 10);
    randomLastCoord = randomFirstCoord + (shipLength - 1);
    // Last coordinate must not exceed the end of the horizontal range
  } while (randomLastCoord >= 10);
  */

  const coordsArr = [];

  // Push X (shipLength) coordinates, starting from randomFirstCoord
  // eslint-disable-next-line no-plusplus
  for (let index = randomFirstCoord; index < (randomFirstCoord + shipLength); index++) {
    coordsArr.push(index);
  }
  return coordsArr;
};

console.log(randomCoordinates(11));

/* TEST
if (coordsArr.length !== shipLength) return;

// Push coordsArr into arrOfCoordsArr
// eslint-disable-next-line no-restricted-syntax
for (const previousCoordsArr of arrOfCoordsArr) {
  if (JSON.stringify(coordsArr) === JSON.stringify(previousCoordsArr)) {
    return;
  }
}
*/

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
