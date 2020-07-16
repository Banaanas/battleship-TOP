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
  let randomNumber;

  if (orientation === "horizontal") {
    randomNumber = Math.floor(Math.random() * 10);
  } else if (orientation === "vertical") {
    /* Regarding the vertical placement, the randomNumber to randomly set
   a range (numberRanges[randomNumber]) must not exceed the range from which
   placement is impossible, else it would generate an infinite do while loop
   later, while trying to find a random coordinate.
   Example - shipLenth is 2, then the maximum range would be [80, 89] -> numberRanges[8].
   So the randomNumber to randomly set a range should be 8. Which is 10 - 2.
   --> For each ship, it is 10 - shipLength.
    */
    randomNumber = getRandomInt(0, 10 - shipLength);
  }

  // Chose one range randomly
  const randomRange = numberRanges[randomNumber];
  const [minRangeNumb, maxRangeNumb] = randomRange;

  if (orientation === "horizontal") {
    // Generate Random Coordinates which can't exceed the end of the range
    do {
      randomFirstCoord = getRandomInt(minRangeNumb, maxRangeNumb);
      randomLastCoord = randomFirstCoord + (shipLength - 1);
      // Last coordinate must not exceed the end of the horizontal range
    } while (randomLastCoord > (maxRangeNumb));
  }

  if (orientation === "vertical") {
    // Generate Random Coordinates which can't exceed the end of the range
    do {
      randomFirstCoord = getRandomInt(minRangeNumb, maxRangeNumb);
      // DIFFERENCE - randomLastCoord = randomFirstCoord + (shipLength - 1);
      randomLastCoord = randomFirstCoord + ((shipLength - 1) * 10);
      // eslint-disable-next-line no-debugger
      // Last coordinate must not exceed the end of the horizontal range
      // DIFFERENCE - } while (randomLastCoord > (maxRangeNumb));
    } while (randomLastCoord > 99);
  }

  const coordsArr = [];

  if (orientation === "horizontal") {
    // Push X (shipLength) coordinates, starting from randomFirstCoord
    // eslint-disable-next-line no-plusplus
    for (let index = randomFirstCoord;
      index < (randomFirstCoord + shipLength); index++) {
      coordsArr.push(index);
    }
  }

  if (orientation === "vertical") {
    // Push X (shipLength) coordinates, starting from randomFirstCoord
    for (let index = randomFirstCoord; index <= randomLastCoord; index += 10) {
      coordsArr.push(index);
    }
  }

  return coordsArr;
};

console.log(randomCoordinates(5, "horizontal"));
console.log(randomCoordinates(5, "vertical"));

/*
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

  const coordsArr = [];

  // Push X (shipLength) coordinates, starting from randomFirstCoord
  // eslint-disable-next-line no-plusplus
  for (let index = randomFirstCoord; index < (randomFirstCoord + shipLength); index++) {
    coordsArr.push(index);
  }
  return coordsArr;
};
*/

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
// Generate Random Coordinates which can't exceed the end of the range
do {
  randomFirstCoord = Math.floor(Math.random() * 10);
  randomLastCoord = randomFirstCoord + (shipLength - 1);
  // Last coordinate must not exceed the end of the horizontal range
} while (randomLastCoord >= 10);
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
