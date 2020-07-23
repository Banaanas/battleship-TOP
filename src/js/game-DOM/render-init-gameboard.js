// Render the initializing Gameboard
const renderInitGameboard = (gameboardObj, allGameboardCases) => {
  gameboardObj.allShips.forEach((ship) => {
    ship.coords.forEach((coord) => {
      // Style gameboard's cases which are occupied by ships
      allGameboardCases[coord].style.backgroundColor = "var(--primary-dark-color)";
    });
  });
};

export default renderInitGameboard;
