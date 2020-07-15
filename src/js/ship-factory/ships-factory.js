const Ship = (shipLength) => ({
  shipLength,
  coords: [],
  damages: [],
  sunk: false,
  hit(position) { // Push damages into ship's damages array
    this.damages.push(position);
    return this.damages;
  },
  isSunk() { // Check if the ship is sunk
    if (this.damages.length === shipLength) this.sunk = true;
    return this.sunk;
  },
});

export default Ship;
