import { useState } from "react";

function ToggleBtn() {
  const [value, setValue] = useState(false);

  const setToggle = (value) => {
    setValue(!value);
  };

  return (
    <div>
      <h2 className="container">Toggle ON / OFF</h2>
      <button
        className={value ? "button button--on" : "button button--off"}
        onClick={() => setToggle(value)}
      >
        {value ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleBtn;
