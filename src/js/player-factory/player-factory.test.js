import Player from "./player-factory";
import Gameboard from "../gameboard-factory/gameboard-factory";
import Ship from "../ship-factory/ships-factory";

const humanGameboard = Gameboard();
const computerGameboard = Gameboard();
const humanPlayer = Player("humanPlayer", computerGameboard);
const computerPlayer = Player("computerPlayer", humanGameboard);

// console.log(computerGameboard.allShips[0]);

describe("player-factory Factory", () => {
  const carrier = Ship("carrier", 5);
  carrier.coords = [10, 11, 12, 13, 14];
  computerGameboard.allShips.push(carrier);
  computerGameboard.placeShip(computerGameboard.allShips[0]);

  it("can take turns playing the game by attacking the enemy Gameboard", () => {
    humanPlayer.takeTurn(10);
    humanPlayer.takeTurn(14);
    humanPlayer.takeTurn(15); // missed shot
    expect(computerGameboard.allShips[0].damages)
      .toContain(10);
    expect(computerGameboard.allShips[0].damages)
      .toContain(14);
    expect(computerGameboard.allShips[0].damages)
      .not
      .toContain(15);
    expect(computerGameboard.missedShots)
      .toContain(15);
  });

  test("if computerPlayer makes DIFFERENT / UNIQUE random plays", () => {
    for (let i = 0; i < 100; i++) { // call the function 100 times
      computerPlayer.takeTurn(computerPlayer.computerRandomPlay());
    }
    // SET Object only accepts unique values
    const uniqueSet = new Set(computerPlayer.previousAttacks);
    expect(uniqueSet.size)
      .toBe(computerPlayer.previousAttacks.length);
  });

  it("should NOT accept more than 100 computer's random plays", () => {
    computerPlayer.takeTurn(computerPlayer.computerRandomPlay()); // 101th function call
    computerPlayer.takeTurn(computerPlayer.computerRandomPlay()); // 102th function call
    computerPlayer.takeTurn(computerPlayer.computerRandomPlay()); // 103th function call
    computerPlayer.takeTurn(computerPlayer.computerRandomPlay()); // 104th function call
    expect(computerPlayer.previousAttacks.length)
      .toBe(100);
  });
});
