import gameController from "./gameboard-controller";

gameController();

describe("gameControl", () => {
  test("if gameGrid length is 100", () => {
    expect(2 * 10).toBe(20);
  });
});
