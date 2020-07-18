// Import core.js
import "core-js";
import "regenerator-runtime/runtime";
// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";
import initGame from "./js/init-game/init-game";
import shipChoiceDOM from "./js/manual-coordinates/placement-DOM";

shipChoiceDOM()
initGame();

/*
* Random Placement;
* Modal explaining rules;
* grid gap
* CSS - min width pour les grids
* CSS - regarder du côté de flex-grow / shrink
* Epurer toutes les fonctions non utilisées
* */
