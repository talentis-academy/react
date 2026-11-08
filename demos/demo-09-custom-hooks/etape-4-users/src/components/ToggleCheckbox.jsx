import { useState } from "react";

function ToggleSwitch() {
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
          onChange={(e) => setValue(e.target.checked)}
        />
        <span>{value ? "ON" : "OFF"}</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
