import Ship from "../ship-factory/ships-factory";

// Get random integer between min and max range
const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Gameboard cases ranges array
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

// Return true if at least 1 duplicate/shared value between two arrays
const checkDuplicates = (coordsArr, dupliArr) =>
  coordsArr.some((ai) => dupliArr.includes(ai));

// Store all coordinates who have been previously attributed
let previousAssignedCoords = [];

// Return random Coordinates in function of shipLength and orientation
const randomCoordinates = (shipLength, orientation) => {
  // Return undefined if shipLength is greater than 5 cases
  if (shipLength > 5) {
    return;
  }

  // randomFirstCoord, randomLastCoord and randomNumber are different according
  // to the ship's orientation (horizontal vs. vertical)
  let randomFirstCoord;
  let randomLastCoord;
  let randomNumber;

  if (orientation === "horizontal") {
    randomNumber = Math.floor(Math.random() * 10); // randomNumber between 0 and 9
  } else if (orientation === "vertical") {
    /* Regarding the vertical placement, the randomNumber to randomly set
   a range (numbersRanges[randomNumber]) must not exceed the range from which
   placement gets impossible, else it would generate an infinite do...while loop
   later, while trying to find a random coordinate.
   Example - shipLength is 2, then the maximum range would be [80, 89] -> numbersRanges[8].
   So the max randomNumber to randomly set a range should be 8. Which is 10 - 2.
   --> For each ship, the max randomNumber to randomly set a range is : 10 - shipLength.
    */
    randomNumber = getRandomInt(0, 10 - shipLength);
  }

  // Chose one gameboard range randomly
  const randomRange = numbersRanges[randomNumber];
  // Set minRangeNumb and maxRangeNumb
  const [minRangeNumb, maxRangeNumb] = randomRange;

  if (orientation === "horizontal") {
    // Generate Random Coordinates which can't exceed the end of the range
    do {
      // Get randomFirstCoord from the randomly chosen range
      randomFirstCoord = getRandomInt(minRangeNumb, maxRangeNumb);
      // Get last coordinate from randomFirstCoord
      randomLastCoord = randomFirstCoord + (shipLength - 1);
      // Last coordinate must not exceed the end of the horizontal range
    } while (randomLastCoord > maxRangeNumb); // because it's horizontal
  }

  if (orientation === "vertical") {
    // Generate Random Coordinates which can't exceed the end of the range
    do {
      // Get randomFirstCoord from the randomly chosen range
      randomFirstCoord = getRandomInt(minRangeNumb, maxRangeNumb);
      // Get last coordinate from randomFirstCoord
      randomLastCoord = randomFirstCoord + (shipLength - 1) * 10;
      // Last coordinate must not exceed the end of the horizontal range
    } while (randomLastCoord > 99); // because it's vertical
  }

  // Create the random coordinates array
  const coordsArr = [];

  if (orientation === "horizontal") {
    // Push X (shipLength) coordinates, starting from randomFirstCoord
    for (
      let index = randomFirstCoord;
      // eslint-disable-next-line no-plusplus
      index < randomFirstCoord + shipLength;
      index++
    ) {
      coordsArr.push(index); // Push all coordinates into the random coordinates array
    }
  }

  if (orientation === "vertical") {
    // Push X (shipLength) coordinates, starting from randomFirstCoord
    for (let index = randomFirstCoord; index <= randomLastCoord; index += 10) {
      coordsArr.push(index); // Push all coordinates into the random coordinates array
    }
  }

  // Return the random coordinates array
  // eslint-disable-next-line consistent-return
  return coordsArr;
};

// Create UNIQUE randomCoords (not duplicated one)
const secureRandomCoords = (lengthShip, orientation) => {
  let newShipCoords;
  do {
    // Keep generating random coords while there is duplicated one
    newShipCoords = randomCoordinates(lengthShip, orientation);
  } while (checkDuplicates(newShipCoords, previousAssignedCoords) === true);

  // Push the UNIQUE random coords unto the previousAssignedCoords array
  // to apply the previous "while" condition with the checkDuplicates function
  previousAssignedCoords = [...previousAssignedCoords, ...newShipCoords];

  // Return the Return the UNIQUE random coordinates array
  return newShipCoords;
};

const getRandomOrientation = () => {
  const orientationChoice = ["horizontal", "vertical"];
  return orientationChoice[getRandomInt(0, 1)];
};

const getRandomNavy = () => {
  const randomNavy = {
    carrier: Ship(5),
    battleship: Ship(4),
    destroyer: Ship(3),
    submarine: Ship(3),
    patrolBoat: Ship(2),
  };
  randomNavy.carrier.coords = secureRandomCoords(5, getRandomOrientation());
  randomNavy.battleship.coords = secureRandomCoords(4, getRandomOrientation());
  randomNavy.destroyer.coords = secureRandomCoords(3, getRandomOrientation());
  randomNavy.submarine.coords = secureRandomCoords(3, getRandomOrientation());
  randomNavy.patrolBoat.coords = secureRandomCoords(2, getRandomOrientation());

  return randomNavy;
};

export { randomCoordinates, getRandomNavy };
