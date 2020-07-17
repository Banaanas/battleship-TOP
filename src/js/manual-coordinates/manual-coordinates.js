import renderInitGameboard from "../game-DOM/render-init-gameboard";

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

const phantomShip = (indexForEach) => {
  // Determine range
  const rangeIndex = Math.floor(indexForEach / 10);
  const carrierRange = numbersRanges[rangeIndex];
  const carrierRangeMaxNumber = carrierRange[1];
  if ((carrierRangeMaxNumber - indexForEach) < 4) return;
  humanGameboardCases.forEach((item, index) => {
    if ((index >= indexForEach) && (index < indexForEach + 5)) {
      item.style.backgroundColor = "red";
    }
  });
};

const outPhantomShip = (gbrdObj, gbrdCases) => {
  humanGameboardCases.forEach((item, index) => {
    item.style.backgroundColor = "var(--primary-light-color)";
  });
  renderInitGameboard(gbrdObj, gbrdCases);
};

const manualPlacement = () => {
  humanGameboardCases.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      phantomShip(index);
    });
    item.addEventListener("mouseleave", (event) => {
      outPhantomShip(humanGameboard, humanGameboardCases);
    });
  });
};

export { phantomShip, outPhantomShip };
