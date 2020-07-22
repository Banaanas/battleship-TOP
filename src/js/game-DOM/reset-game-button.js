import elementsDOM from "./elements-DOM";

const setResetGameButton = () => {
  elementsDOM.resetGameButton.addEventListener("click", () => {
    window.location.reload();
  });
};

export default setResetGameButton;
