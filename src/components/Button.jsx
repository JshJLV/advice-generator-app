import iconDice from "../assets/icon-dice.svg";
import "./Button.css";

function Button({ handleButton }) {
  return (
    <button
      onClick={handleButton}
      className="
      bg-bg-neon-green 
      p-4 
      rounded-full 
      button
      "
    >
      <img src={iconDice} alt="Icon dice" />
    </button>
  );
}

export default Button;
