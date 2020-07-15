import Gameboard from "./gameboard-factory";
import Ship from "../ship-factory/ships-factory";

const gameboardTest = Gameboard();
const gameboardTestEnemy = Gameboard();
const carrier = Ship("carrier", 5);
const destroyer = Ship("destroyer", 3);
const patrolBoat = Ship("patrolBoat", 2);
carrier.coords = [0, 1, 2, 3, 4];
destroyer.coords = [70, 71, 72];
gameboardTest.allShips.push(carrier, destroyer, patrolBoat);
// Count how many cases are occupied ( occupied case === true / empty case === false)
const countTrueCases = () => gameboardTest.gameGrid.reduce((a, b) => a + (b === true), 0);
let occupiedGridCases; // For comparison test purpose it will store the occupied grid cases number

describe("gameGrid Length", () => {
  test("if gameGrid length is 100", () => {
    expect(gameboardTest.gameGrid.length).toBe(100);
  });
});

describe("gameboardTest.placeShip method", () => {
  it("should be able to place ships at specific coordinates by calling the ship factory function", () => {
    // Place carrier - 5
    gameboardTest.placeShip(gameboardTest.allShips[0]);
    occupiedGridCases = countTrueCases();
    expect(occupiedGridCases).toBe(5);

    // Place destroyer - 5 + 3
    gameboardTest.placeShip(gameboardTest.allShips[1]);
    occupiedGridCases = countTrueCases();
    expect(occupiedGridCases).toBe(8);
  });

  it("should not accept same coordinates twice", () => {
    // Try to place borderPatrol
    // all coordinates are already occupied in the game grid
    gameboardTest.allShips[2].coords = [70, 71];
    gameboardTest.placeShip(gameboardTest.allShips[2]);
    occupiedGridCases = countTrueCases();
    expect(occupiedGridCases).toBe(8); // 8 + 0
  });

  it("should not accept same coordinate twice (only one)", () => {
    // just one coordinate corresponds to an occupied game grid case (4)
    gameboardTest.allShips[2].coords = [4, 5];
    gameboardTest.placeShip(gameboardTest.allShips[2]);
    occupiedGridCases = countTrueCases();
    expect(occupiedGridCases).toBe(8); // 8 + 0
  });

  it("should accept different coordinates", () => {
    // all coordinates correspond to empty game grid cases
    gameboardTest.allShips[2].coords = [95, 96];
    gameboardTest.placeShip(gameboardTest.allShips[2]);
    occupiedGridCases = countTrueCases();
    expect(occupiedGridCases).toBe(10); // 8 + 2
  });
});

describe("gameboardTest.receiveAttack method", () => {
  it("determines whether or not the attack hit a ship", () => {
    gameboardTest.receiveAttack(95, gameboardTestEnemy); // 1 damage
    expect(gameboardTest.allShips[2].damages).toContain(95); // 1 damage to borderPatrol
    expect(gameboardTest.missedShots.length).toBe(0); // No missed shots
    expect(gameboardTest.missedShots).not.toContain(95); // No missed shots

    gameboardTest.receiveAttack(75, gameboardTestEnemy); // 1 missed shot
    expect(gameboardTest.allShips[0].damages.length).toBe(0); // 0 new damage to carrier
    expect(gameboardTest.allShips[1].damages.length).toBe(0); // 0 damage to destroyer
    // eslint-disable-next-line max-len
    expect(gameboardTest.allShips[2].damages.length).toBe(1); // 0 new damage to patrolBoat (still the precedent)
    expect(gameboardTest.missedShots.length).toBe(1); // No missed shots
    expect(gameboardTest.missedShots).toContain(75); // No missed shots

    gameboardTest.receiveAttack(4, gameboardTestEnemy); // 1 damage
    expect(gameboardTest.allShips[0].damages.length).toBe(1); // 1 new damage to carrier
    expect(gameboardTest.allShips[0].damages).toContain(4); // 1 new damage to carrier

    gameboardTest.receiveAttack(72, gameboardTestEnemy); // 1 damage
    expect(gameboardTest.allShips[1].damages.length).toBe(1); // 1 new damage to destroyer
    expect(gameboardTest.allShips[1].damages).toContain(72); // 1 new damage to destroyer
    gameboardTest.receiveAttack(96, gameboardTestEnemy); // 1 damage

    // eslint-disable-next-line max-len
    expect(gameboardTest.allShips[2].damages.length).toBe(2); // 1 new damage to patrolBoat (+ 1 before)
    expect(gameboardTest.allShips[2].damages).toContain(95); // 2 damages to patrolBoat (95 - 96)
    expect(gameboardTest.allShips[2].damages).toContain(96); // 2 damages to patrolBoat (95 - 96)

    gameboardTest.receiveAttack(35, gameboardTestEnemy); // 1 missed shot
    gameboardTest.receiveAttack(62, gameboardTestEnemy); // 1 missed shot
    gameboardTest.receiveAttack(18, gameboardTestEnemy); // 1 missed shot
    gameboardTest.receiveAttack(86, gameboardTestEnemy); // 1 missed shot
    expect(gameboardTest.missedShots.length).toBe(5); // 4 + 1 missed shots
    expect(gameboardTest.missedShots).toEqual([75, 35, 62, 18, 86]); // 5 missed shots
  });
});

describe("gameboardTest.receiveAttack method - 2", () => {
  it("should not accept duplicated missedShot", () => {
    // eslint-disable-next-line max-len
    expect(gameboardTest.receiveAttack(96, gameboardTestEnemy)).toBe(false); // Duplicate strike at same (empty) position - Duplicate missed shot
    const previousAttackLenghtBeforeDuplicated = gameboardTestEnemy.previousAttacks.length;
    // eslint-disable-next-line max-len
    gameboardTest.receiveAttack(96, gameboardTestEnemy); // Same duplicate strike - Duplicate missed shot
    expect(gameboardTestEnemy.previousAttacks.length).toBe(previousAttackLenghtBeforeDuplicated);
  });
});

describe("gameboardTest.receiveAttack method - 3", () => {
  it("should not accept duplicated damage", () => {
    // eslint-disable-next-line max-len
    expect(gameboardTest.receiveAttack(72, gameboardTestEnemy)).toBe(false); // Same strike at same (occupied) position - Duplicate damage
    const previousAttackLenghtBeforeDuplicated = gameboardTestEnemy.previousAttacks.length;
    // eslint-disable-next-line max-len
    gameboardTest.receiveAttack(72, gameboardTestEnemy); // Same duplicate strike - Duplicate damage
    expect(gameboardTestEnemy.previousAttacks.length).toBe(previousAttackLenghtBeforeDuplicated);
    // eslint-disable-next-line max-len
    gameboardTest.receiveAttack(10, gameboardTestEnemy); // No duplicate strike - Accept the strike
    // eslint-disable-next-line max-len
    expect(gameboardTestEnemy.previousAttacks.length).not.toBe(previousAttackLenghtBeforeDuplicated);
    // eslint-disable-next-line max-len
    expect(gameboardTestEnemy.previousAttacks.length).toBe(previousAttackLenghtBeforeDuplicated + 1);
  });
});

describe("gameboardTest.allShipsSunk method", () => {
  test("if the game does NOT end while one players ships have not ALL been sunk", () => {
    expect(gameboardTest.allShipsSunk()).toBe(false);
  });
  test("if the game ends once one players ships have all been sunk", () => {
    gameboardTest.allShips[0].damages = [0, 1, 2, 3, 4];
    gameboardTest.allShips[1].damages = [70, 71, 72];
    gameboardTest.allShips[2].coords = [95, 96]; // Have to set coords agains
    gameboardTest.allShips[2].damages = [95, 96];
    expect(gameboardTest.allShipsSunk()).toBe(true);
  });
});
