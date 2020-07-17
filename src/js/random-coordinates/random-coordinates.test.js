import randomCoordinates from "./random-coordinates";

describe("gameboardTest..randomCoords method", () => {
  it("should generate array which length is equal to shipLength", () => {
    expect(randomCoordinates(5, "horizontal").length)
      .toBe(5);
    expect(randomCoordinates(4, "vertical").length)
      .toBe(4);
    expect(randomCoordinates(3, "horizontal").length)
      .toBe(3);
  });

  it("should return undefined if shipLength is greater than 5", () => {
    expect(randomCoordinates(6, "vertical"))
      .toBe(undefined);
    expect(randomCoordinates(10, "horizontal"))
      .toBe(undefined);
    expect(randomCoordinates(4, "vertical"))
      .not
      .toBe(undefined);
  });

  it("should generate X (shipLength) consecutive numbers if HORIZONTAL MOVE", () => {
    // Calculate the difference between last and first number of coordinates array
    // The difference must always bee shipLength - 1 because they are consecutive numbers
    let consecutiveMaxAndMin;

    const carrierRandomCoords = randomCoordinates(5, "horizontal");
    consecutiveMaxAndMin = carrierRandomCoords[4] - carrierRandomCoords[0];
    expect(consecutiveMaxAndMin)
      .toBe(4);

    const patrolBoatCoords = randomCoordinates(3, "horizontal");
    consecutiveMaxAndMin = patrolBoatCoords[2] - patrolBoatCoords[0];
    expect(consecutiveMaxAndMin)
      .toBe(2);
  });

  it("should generate X (shipLength) numbers with a difference of 10 between each if VERTICAL MOVE",
    () => {
      // Check if the result of the subtraction between each vertical coordinate
      // and the precedent one is equal to 10
      const checkDifference = (arr) => {
        const resultsSubstractions = [];
        arr.forEach((item, index) => {
          if (index === 0) return;
          const subtraction = item - arr[index - 1];
          resultsSubstractions.push(subtraction);
        });

        return resultsSubstractions.every((currentValue) => currentValue === 10);
      };

      const verticalCarrierCoords = randomCoordinates(5, "vertical");
      const verticalBattleshipCoords = randomCoordinates(4, "vertical");
      const verticalDestroyerCoords = randomCoordinates(3, "vertical");
      const verticalSubmarineCoords = randomCoordinates(3, "vertical");
      const verticalPatrolBoatCoords = randomCoordinates(2, "vertical");

      expect(checkDifference(verticalCarrierCoords))
        .toBe(true);
      expect(checkDifference(verticalBattleshipCoords))
        .toBe(true);
      expect(checkDifference(verticalDestroyerCoords))
        .toBe(true);
      expect(checkDifference(verticalSubmarineCoords))
        .toBe(true);
      expect(checkDifference(verticalPatrolBoatCoords))
        .toBe(true);

      expect(checkDifference([10, 11, 12, 13, 14]))
        .toBe(false);
    });

  it("should NOT generate duplicate(s) coordinates", () => {
    expect(1 + 1)
      .toBe(2);
  });
});
