// Ships DOM selectors
const elementsDOM = {
  humanAside: document.querySelector("#human-aside"),
  humanNavy: document.querySelector("#human-navy"),
  carrier: document.querySelector("#carrier-choice"),
  battleship: document.querySelector("#battleship-choice"),
  destroyer: document.querySelector("#destroyer-choice"),
  submarine: document.querySelector("#submarine-choice"),
  patrolBoat: document.querySelector("#patrol-boat-choice"),
  allShips: document.querySelectorAll(".ship-div"),
  rotateShipButton: document.querySelector("#rotate-ship-button"),
  humanGameboardCases: document.querySelectorAll(
    "#human-gameboard-grid-container .gameboard-array"
  ),
  humanGameboardContainer: document.querySelector("#human-gameboard-container"),
  humanGameboardGridContainer: document.querySelector("#human-gameboard-grid-container"),
  computerGameboardCases: document.querySelectorAll("#computer-gameboard .gameboard-array"),
  gridHTML: ` <span></span>
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
              <span class="gameboard-array">A1</span>
              <span class="gameboard-array">B1</span>
              <span class="gameboard-array">C1</span>
              <span class="gameboard-array">D1</span>
              <span class="gameboard-array">E1</span>
              <span class="gameboard-array">F1</span>
              <span class="gameboard-array">G1</span>
              <span class="gameboard-array">H1</span>
              <span class="gameboard-array">I1</span>
              <span class="gameboard-array">J1</span>
              <span>2</span>
              <span class="gameboard-array">A2</span>
              <span class="gameboard-array">B2</span>
              <span class="gameboard-array">C2</span>
              <span class="gameboard-array">D2</span>
              <span class="gameboard-array">E2</span>
              <span class="gameboard-array">F2</span>
              <span class="gameboard-array">G2</span>
              <span class="gameboard-array">H2</span>
              <span class="gameboard-array">I2</span>
              <span class="gameboard-array">J2</span>
              <span>3</span>
              <span class="gameboard-array">A3</span>
              <span class="gameboard-array">B3</span>
              <span class="gameboard-array">C3</span>
              <span class="gameboard-array">D3</span>
              <span class="gameboard-array">E3</span>
              <span class="gameboard-array">F3</span>
              <span class="gameboard-array">G3</span>
              <span class="gameboard-array">H3</span>
              <span class="gameboard-array">I3</span>
              <span class="gameboard-array">J3</span>
              <span>4</span>
              <span class="gameboard-array">A4</span>
              <span class="gameboard-array">B4</span>
              <span class="gameboard-array">C4</span>
              <span class="gameboard-array">D4</span>
              <span class="gameboard-array">E4</span>
              <span class="gameboard-array">F4</span>
              <span class="gameboard-array">G4</span>
              <span class="gameboard-array">H4</span>
              <span class="gameboard-array">I4</span>
              <span class="gameboard-array">J4</span>
              <span>5</span>
              <span class="gameboard-array">A5</span>
              <span class="gameboard-array">B5</span>
              <span class="gameboard-array">C5</span>
              <span class="gameboard-array">D5</span>
              <span class="gameboard-array">E5</span>
              <span class="gameboard-array">F5</span>
              <span class="gameboard-array">G5</span>
              <span class="gameboard-array">H5</span>
              <span class="gameboard-array">I5</span>
              <span class="gameboard-array">J5</span>
              <span>6</span>
              <span class="gameboard-array">A6</span>
              <span class="gameboard-array">B6</span>
              <span class="gameboard-array">C6</span>
              <span class="gameboard-array">D6</span>
              <span class="gameboard-array">E6</span>
              <span class="gameboard-array">F6</span>
              <span class="gameboard-array">G6</span>
              <span class="gameboard-array">H6</span>
              <span class="gameboard-array">I6</span>
              <span class="gameboard-array">J6</span>
              <span>7</span>
              <span class="gameboard-array">A7</span>
              <span class="gameboard-array">B7</span>
              <span class="gameboard-array">C7</span>
              <span class="gameboard-array">D7</span>
              <span class="gameboard-array">E7</span>
              <span class="gameboard-array">F7</span>
              <span class="gameboard-array">G7</span>
              <span class="gameboard-array">H7</span>
              <span class="gameboard-array">I7</span>
              <span class="gameboard-array">J7</span>
              <span>8</span>
              <span class="gameboard-array">A8</span>
              <span class="gameboard-array">B8</span>
              <span class="gameboard-array">C8</span>
              <span class="gameboard-array">D8</span>
              <span class="gameboard-array">E8</span>
              <span class="gameboard-array">F8</span>
              <span class="gameboard-array">G8</span>
              <span class="gameboard-array">H8</span>
              <span class="gameboard-array">I8</span>
              <span class="gameboard-array">J8</span>
              <span>9</span>
              <span class="gameboard-array">A9</span>
              <span class="gameboard-array">B9</span>
              <span class="gameboard-array">C9</span>
              <span class="gameboard-array">D9</span>
              <span class="gameboard-array">E9</span>
              <span class="gameboard-array">F9</span>
              <span class="gameboard-array">G9</span>
              <span class="gameboard-array">H9</span>
              <span class="gameboard-array">I9</span>
              <span class="gameboard-array">J9</span>
              <span>10</span>
              <span class="gameboard-array">A10</span>
              <span class="gameboard-array">B10</span>
              <span class="gameboard-array">C10</span>
              <span class="gameboard-array">D10</span>
              <span class="gameboard-array">E10</span>
              <span class="gameboard-array">F10</span>
              <span class="gameboard-array">G10</span>
              <span class="gameboard-array">H10</span>
              <span class="gameboard-array">I10</span>
              <span class="gameboard-array">J10</span>`,
};
/*

elementsDOM.humanGameboardGridContainer.innerHTML = "";
// eslint-disable-next-line no-unused-expressions
elementsDOM.humanGameboardGridContainer.insertAdjacentHTML("afterbegin", `
              <span></span>
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
              <span class="gameboard-array">A1</span>
              <span class="gameboard-array">B1</span>
              <span class="gameboard-array">C1</span>
              <span class="gameboard-array">D1</span>
              <span class="gameboard-array">E1</span>
              <span class="gameboard-array">F1</span>
              <span class="gameboard-array">G1</span>
              <span class="gameboard-array">H1</span>
              <span class="gameboard-array">I1</span>
              <span class="gameboard-array">J1</span>
              <span>2</span>
              <span class="gameboard-array">A2</span>
              <span class="gameboard-array">B2</span>
              <span class="gameboard-array">C2</span>
              <span class="gameboard-array">D2</span>
              <span class="gameboard-array">E2</span>
              <span class="gameboard-array">F2</span>
              <span class="gameboard-array">G2</span>
              <span class="gameboard-array">H2</span>
              <span class="gameboard-array">I2</span>
              <span class="gameboard-array">J2</span>
              <span>3</span>
              <span class="gameboard-array">A3</span>
              <span class="gameboard-array">B3</span>
              <span class="gameboard-array">C3</span>
              <span class="gameboard-array">D3</span>
              <span class="gameboard-array">E3</span>
              <span class="gameboard-array">F3</span>
              <span class="gameboard-array">G3</span>
              <span class="gameboard-array">H3</span>
              <span class="gameboard-array">I3</span>
              <span class="gameboard-array">J3</span>
              <span>4</span>
              <span class="gameboard-array">A4</span>
              <span class="gameboard-array">B4</span>
              <span class="gameboard-array">C4</span>
              <span class="gameboard-array">D4</span>
              <span class="gameboard-array">E4</span>
              <span class="gameboard-array">F4</span>
              <span class="gameboard-array">G4</span>
              <span class="gameboard-array">H4</span>
              <span class="gameboard-array">I4</span>
              <span class="gameboard-array">J4</span>
              <span>5</span>
              <span class="gameboard-array">A5</span>
              <span class="gameboard-array">B5</span>
              <span class="gameboard-array">C5</span>
              <span class="gameboard-array">D5</span>
              <span class="gameboard-array">E5</span>
              <span class="gameboard-array">F5</span>
              <span class="gameboard-array">G5</span>
              <span class="gameboard-array">H5</span>
              <span class="gameboard-array">I5</span>
              <span class="gameboard-array">J5</span>
              <span>6</span>
              <span class="gameboard-array">A6</span>
              <span class="gameboard-array">B6</span>
              <span class="gameboard-array">C6</span>
              <span class="gameboard-array">D6</span>
              <span class="gameboard-array">E6</span>
              <span class="gameboard-array">F6</span>
              <span class="gameboard-array">G6</span>
              <span class="gameboard-array">H6</span>
              <span class="gameboard-array">I6</span>
              <span class="gameboard-array">J6</span>
              <span>7</span>
              <span class="gameboard-array">A7</span>
              <span class="gameboard-array">B7</span>
              <span class="gameboard-array">C7</span>
              <span class="gameboard-array">D7</span>
              <span class="gameboard-array">E7</span>
              <span class="gameboard-array">F7</span>
              <span class="gameboard-array">G7</span>
              <span class="gameboard-array">H7</span>
              <span class="gameboard-array">I7</span>
              <span class="gameboard-array">J7</span>
              <span>8</span>
              <span class="gameboard-array">A8</span>
              <span class="gameboard-array">B8</span>
              <span class="gameboard-array">C8</span>
              <span class="gameboard-array">D8</span>
              <span class="gameboard-array">E8</span>
              <span class="gameboard-array">F8</span>
              <span class="gameboard-array">G8</span>
              <span class="gameboard-array">H8</span>
              <span class="gameboard-array">I8</span>
              <span class="gameboard-array">J8</span>
              <span>9</span>
              <span class="gameboard-array">A9</span>
              <span class="gameboard-array">B9</span>
              <span class="gameboard-array">C9</span>
              <span class="gameboard-array">D9</span>
              <span class="gameboard-array">E9</span>
              <span class="gameboard-array">F9</span>
              <span class="gameboard-array">G9</span>
              <span class="gameboard-array">H9</span>
              <span class="gameboard-array">I9</span>
              <span class="gameboard-array">J9</span>
              <span>10</span>
              <span class="gameboard-array">A10</span>
              <span class="gameboard-array">B10</span>
              <span class="gameboard-array">C10</span>
              <span class="gameboard-array">D10</span>
              <span class="gameboard-array">E10</span>
              <span class="gameboard-array">F10</span>
              <span class="gameboard-array">G10</span>
              <span class="gameboard-array">H10</span>
              <span class="gameboard-array">I10</span>
              <span class="gameboard-array">J10</span>`),
*/

export default elementsDOM;
