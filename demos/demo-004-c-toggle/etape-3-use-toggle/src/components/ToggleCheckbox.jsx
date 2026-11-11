import useToggle from "../hooks/useToggle";

function ToggleSwitch() {
  // Le même custom hook que ToggleBtn : plus de code en double
  const { value, toggle } = useToggle(false);

  return (
    <div>
      <h2 className="container">Toggle ON / OFF</h2>
      <label className="switch">
        <input type="checkbox" checked={value} onChange={toggle} />
        <span>{value ? "ON" : "OFF"}</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
