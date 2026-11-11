import { useState } from "react";

function ToggleSwitch() {
  // Le même code que dans ToggleBtn : copié-collé (on le sortira dans un custom hook à l'étape 3)
  const [value, setValue] = useState(false);

  const setToggle = (value) => {
    setValue(!value);
  };

  return (
    <div>
      <h2 className="container">Toggle ON / OFF</h2>
      <label className="switch">
        <input
          type="checkbox"
          checked={value}
          onChange={() => setToggle(value)}
        />
        <span>{value ? "ON" : "OFF"}</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
