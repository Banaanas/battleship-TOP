import elementsDOM from "./elements-DOM";

// Set the Reset Game Function
const setResetGameButton = () => {
  elementsDOM.resetGameButton.addEventListener("click", () => {
    window.location.reload();
  });
};

export default setResetGameButton;
