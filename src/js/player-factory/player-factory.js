// Player Function Factory
const Player = (name, enemyGameboard) => ({
  name,
  previousAttacks: [],
  computerRandomPlay() { // Random Choice for computer player
    // if previousAttacks === 100, it means all computer's moves have been played
    if (this.previousAttacks.length >= 100) {
      return false;
    }
    let computerChoice;
    // If the computer's (random) choice has already been played before,
    // then repeat the function until a new random number is generated
    do {
      computerChoice = Math.floor(Math.random() * 100);
    } while (this.previousAttacks.includes(computerChoice));

    return computerChoice; // return the computer's random number
  },
  takeTurn(coord) {
    if (coord === false) return; // coord === false when computer's random move >= 100
    const coordinates = coord;
    if (this.previousAttacks.includes(coordinates)) {
      console.log("You can't make same move twice"); // player-factory can not make same play twice
      return;
    }
    this.previousAttacks.push(coordinates); // Push move number into previousAttacks array
    enemyGameboard.receiveAttack(coordinates, enemyGameboard);
  },
});

export default Player;
