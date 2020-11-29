import elementsDOM from "./elements-DOM";

// Set some delay
const setMessageDelay = () => {
  setTimeout(() => {
    elementsDOM.gameMessage.style.visibility = "hidden";
  }, 1000);
};

// Display Wait Message
const waitMessage = () => {
  elementsDOM.gameMessage.style.visibility = "visible";
  elementsDOM.gameMessage.style.backgroundColor = "var(--secondary-text-color)";
  elementsDOM.gameMessage.style.color = "var(--primary-dark-color)";
  elementsDOM.gameMessage.style.border = "solid 3px var(--primary-dark-color)";
  elementsDOM.gameMessage.textContent = "Place All Your Ships";
  setMessageDelay();
};

// Display Wait  Message Event Listener
const displayWaitMessage = () => {
  elementsDOM.computerGameboardCases.forEach((item) => {
    item.addEventListener("click", waitMessage);
  });
};

// Display "Don't strike twice" Message
const dontStrikeTwiceMessage = () => {

  // Unlike others functions, this one has an if/else statement for Testing purpose - cf. gameboard-factory.test.js
  // Because DOM is not mocked, the (Integration) Test would not pass without the if/else statement.
  if(elementsDOM.gameMessage !== null) {
    elementsDOM.gameMessage.style.visibility = "visible";
    elementsDOM.gameMessage.style.backgroundColor = "var(--secondary-text-color)";
    elementsDOM.gameMessage.style.color = "var(--primary-dark-color)";
    elementsDOM.gameMessage.style.border = "solid 3px var(--primary-dark-color)";
    elementsDOM.gameMessage.textContent = "Position already hit";
  }
  setMessageDelay();
};

// Display "Click startGameButton" Message
const clickStartButtonMessage = () => {
  elementsDOM.gameMessage.style.visibility = "visible";
  elementsDOM.gameMessage.style.backgroundColor = "var(--secondary-text-color)";
  elementsDOM.gameMessage.style.color = "var(--primary-dark-color)";
  elementsDOM.gameMessage.style.border = "solid 3px var(--primary-dark-color)";
  elementsDOM.gameMessage.textContent = "Click the Start Game Button";
  setMessageDelay();
};

// Display Wait  Message Event Listener
const displayClickStartButtonMessage = () => {
  elementsDOM.computerGameboardCases.forEach((item) => {
    item.addEventListener("click", clickStartButtonMessage);
  });
};

export {
  waitMessage,
  displayWaitMessage,
  dontStrikeTwiceMessage,
  displayClickStartButtonMessage,
  clickStartButtonMessage,
};
