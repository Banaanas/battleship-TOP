// Import core.js
import "core-js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";

// Test import of a JavaScript function, an SVG, and Sass
import battleshipLogo from "./images/battleship.svg";

// Create SVG logo node
const logo = document.createElement("img");
logo.src = battleshipLogo;

// Append SVG and heading nodes to the DOM
const app = document.querySelector("#main");
app.append(logo);

/*
  Carrier - 5
  Battleship - 4
  Destroyer - 3
  Submarine - 3
  Patrol Boat - 2
*/

/*
* Random Placement;
* Modal explaining rules;
* */
