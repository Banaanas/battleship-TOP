import Ship from "./ships-factory";

const expectedObj = {
  shipLength: 2,
  damages: [],
  strikes: [],
  sunk: false,
  hit(position) {
    return position;
  },
  isSunk() {
    if (this.damages.length === shipLength) this.sunk = true;
    return this.sunk;
  },
};

describe("Ship Factory", () => {
  it("should return expectedObj", () => {
    expect(JSON.stringify(Ship(2)))
      .toEqual(JSON.stringify(expectedObj));
  });

  it("should have identical properties", () => {
    expect(Ship(2).shipLength)
      .toBe(expectedObj.shipLength);
    expect(Ship(2).sunk)
      .toBe(expectedObj.sunk);
    expect(Ship(2).damages)
      .toEqual(expectedObj.damages);
  });
});

describe("Hit Function", () => {
  const newShip = Ship(5);
  it("should take a number and then mark that position as ‘hit’.", () => {
    newShip.hit(10);
    console.log(newShip.strikes);
    expect(newShip.strikes)
      .toEqual([
        10,
      ]);
  });

  it("should take a number and then mark that position as ‘hit’.", () => {
    newShip.hit(10);
    console.log(newShip.strikes);
    expect(newShip.strikes)
      .toEqual([
        10,
      ]);
  });
});

/*
- are all ships located / chosen ?
- is the computer smart
- isSunk should be true if Ship created's length === 0?
- ships can not have same places
*/
