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
  [80, 99],
];

const randomCoordinates = (shipLength) => {
  let randomFirstCoord;
  do {
    randomFirstCoord = Math.floor(Math.random() * 10);
  } while ((randomFirstCoord + shipLength) <= 9);
};

export default randomCoordinates;
