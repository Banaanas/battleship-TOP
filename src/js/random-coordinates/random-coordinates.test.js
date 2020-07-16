import randomCoordinates from "./random-coordinates";

describe("gameboardTest..randomCoords method", () => {
  it("should generate array which length is equal to shipLength", () => {
    expect(randomCoordinates(5, "horizontal").length).toBe(5);
    expect(randomCoordinates(4, "vertical").length).toBe(4);
    expect(randomCoordinates(3, "horizontal").length).toBe(3);
  });

  it("should return undefined if shipLength is greater than 5", () => {
    expect(randomCoordinates(6, "vertical")).toBe(undefined);
    expect(randomCoordinates(10, "horizontal")).toBe(undefined);
    expect(randomCoordinates(4, "vertical")).not.toBe(undefined);
  });

  it("should generate X (shipLength) consecutive numbers if HORIZONTAL MOVE", () => {
    // Calculate the difference between last and first number of coordinates array
    // The difference must always bee shipLength - 1 because they are consecutive numbers
    let consecutiveMaxAndMin;

    const carrierRandomCoords = randomCoordinates(5);
    consecutiveMaxAndMin = carrierRandomCoords[4] - carrierRandomCoords[0];
    expect(consecutiveMaxAndMin).toBe(4);

    const patrolBoatCoords = randomCoordinates(3);
    consecutiveMaxAndMin = patrolBoatCoords[2] - patrolBoatCoords[0];
    expect(consecutiveMaxAndMin).toBe(2);
  });

  it("should generate X (shipLength) numbers with a difference of 10 between each if VERTICAL MOVE", () => {
    const carrierRandomCoords = randomCoordinates(5);
    expect(carrierRandomCoords.length).toBe(5);
    expect(randomCoordinates(5).length).toBe(5);
    expect(randomCoordinates(4).length).toBe(4);
    expect(randomCoordinates(3).length).toBe(3);
  });
});
