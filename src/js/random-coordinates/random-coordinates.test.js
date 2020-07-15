import randomCoordinates from "./random-coordinates";

describe("gameboardTest..randomCoords method", () => {
  it("should generate X (shipLength) consecutive numbers", () => {
    const carrierRandomCoords = randomCoordinates(5);
    expect(carrierRandomCoords.length).toBe(5);
  });
});
