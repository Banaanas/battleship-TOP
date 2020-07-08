// Import core.js
import "core-js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";

// Test import of a JavaScript function, an SVG, and Sass
import battleshipLogo from "./images/battleship.svg";
import Ship from "./js/ships-factory";

// Create SVG logo node
const logo = document.createElement("img");
logo.src = battleshipLogo;

// Append SVG and heading nodes to the DOM
const app = document.querySelector("#main");
app.append(logo);

const battleship = Ship(200);
battleship.hit(10);
console.log(battleship.strikes);

