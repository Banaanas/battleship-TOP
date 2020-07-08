const Ship = (shipLength) => ({
  shipLength,
  damages: [],
  strikes: [],
  sunk: false,
  hit(position) {
    this.strikes.push(position);
    return this.strikes;
  },
  isSunk() {
    if (this.damages.length === shipLength) this.sunk = true;
    return this.sunk;
  },
});

export default Ship;
