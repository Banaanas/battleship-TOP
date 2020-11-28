// Import core.js
import "core-js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";

// Import Images
import battleShipIcon from "./images/battleship.svg";
import battleShipIcon2 from "./images/battleship-2.svg";
import battleShipIcon3 from "./images/battleship-3.svg";
import humanFleetIcon from "./images/humans.svg";
import computerFleetIcon from "./images/monsters.svg";

import initGame from "./js/init-game/init-game";

const headerIcons = document.querySelectorAll(".header-icons");
const fleetsIcons = document.querySelectorAll(".fleets-icon");
headerIcons[0].src = battleShipIcon;
headerIcons[1].src = battleShipIcon2;
headerIcons[2].src = battleShipIcon3;
fleetsIcons[0].src = humanFleetIcon;
fleetsIcons[1].src = computerFleetIcon;

// Load the Game Page
initGame();
