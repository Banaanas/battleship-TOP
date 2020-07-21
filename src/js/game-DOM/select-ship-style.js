// Toggle selected ship CSS style
const toggleStyleSelectedShip = (clickedShip, allShipsDOM) => {
  allShipsDOM.forEach((item) => {
    item.classList.remove("ship-div-clicked");
  });
  clickedShip.classList.add("ship-div-clicked");
};

export default toggleStyleSelectedShip;
