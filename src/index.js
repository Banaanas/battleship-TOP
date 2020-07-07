// Import core.js
import "core-js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";

// Test import of a JavaScript function, an SVG, and Sass
import HelloWorld from "./js/HelloWorld";
import schtroumpfLogo from "./images/schtroumpf-grognon.jpg";

// Create SVG logo node
const logo = document.createElement("img");
logo.src = schtroumpfLogo;

// Create heading node
const greeting = document.createElement("h2");
greeting.textContent = HelloWorld();

// Append SVG and heading nodes to the DOM
const app = document.querySelector("#main");
app.append(logo, greeting);

// Some console.log
console.log("Hola");
