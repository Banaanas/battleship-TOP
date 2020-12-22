// Ships DOM selectors
const elementsDOM = {
  gameToolsAside: document.querySelector("#game-tools-aside"),
  gameMessage: document.querySelector("#game-message"),
  humanNavy: document.querySelector("#human-navy"),
  shipChoices: document.querySelector("#ship-choices"),
  carrier: document.querySelector("#carrier-choice"),
  battleship: document.querySelector("#battleship-choice"),
  destroyer: document.querySelector("#destroyer-choice"),
  submarine: document.querySelector("#submarine-choice"),
  patrolBoat: document.querySelector("#patrol-boat-choice"),
  allShips: document.querySelectorAll(".ship-div"),
  rotateShipButton: document.querySelector("#rotate-ship-button"),
  resetGameButton: document.querySelector("#reset-game-button"),
  humanGameboardCases: document.querySelectorAll(
    "#human-gameboard-grid-container .gameboard-array",
  ),
  humanGameboardContainer: document.querySelector("#human-gameboard-container"),
  humanGameboardGridContainer: document.querySelector(
    "#human-gameboard-grid-container",
  ),
  computerGameboardCases: document.querySelectorAll(
    "#computer-gameboard .gameboard-array",
  ),
  gridHTML: `<span></span>
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
            <span>F</span>
            <span>G</span>
            <span>H</span>
            <span>I</span>
            <span>J</span>
            <span>1</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>2</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>3</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>4</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>5</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>6</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>7</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>8</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>9</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span>10</span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>
            <span class="gameboard-array"></span>`,
};

export default elementsDOM;
