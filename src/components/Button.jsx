import iconDice from "../assets/icon-dice.svg";

function Button({ handleButton }) {
  return (
    <button
      onClick={handleButton}
      className="bg-bg-neon-green p-4 rounded-full hover:shadow-bg-neon-green "
    >
      <img src={iconDice} alt="Icon dice" />
    </button>
  );
}

export default Button;
