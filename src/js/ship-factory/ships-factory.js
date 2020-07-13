const Ship = (shipLength) => ({
  shipLength,
  coords: [],
  damages: [],
  sunk: false,
  hit(position) {
    if (this.damages.includes(position)) {
      console.log("You can not hit the same position twice");
      return false;
    }
    this.damages.push(position);
    return this.damages;
  },
  isSunk() {
    if (this.damages.length === shipLength) this.sunk = true;
    return this.sunk;
  },
});

export default Ship;
