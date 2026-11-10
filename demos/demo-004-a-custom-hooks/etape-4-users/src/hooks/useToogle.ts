import { useState } from "react";

// Le custom hook useToggle : prêt, mais aucun composant ne l'importe (ToggleCheckbox garde son useState)
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => {
    setValue(!value);
  };

  return { value, toggle };
}

export default useToggle;
