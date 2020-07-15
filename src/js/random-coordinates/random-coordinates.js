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
  // eslint-disable-next-line consistent-return
  return coordsArr;
};

export default randomCoordinates;
