import useToggle from "../hooks/useToggle";

function ToggleBtn() {
  // La logique du toggle est dans le custom hook useToggle
  const { value, toggle } = useToggle(false);

  return (
    <div>
      <h2 className="container">Toggle ON / OFF</h2>
      <button
        className={value ? "button button--on" : "button button--off"}
        onClick={toggle}
      >
        {value ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleBtn;
