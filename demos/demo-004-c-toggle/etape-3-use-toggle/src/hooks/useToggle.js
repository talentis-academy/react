import { useState } from "react";

// Custom hook useToggle : le state et la fonction pour inverser la valeur, réutilisables dans n'importe quel composant
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => {
    setValue(!value);
  };

  return { value, toggle };
}

export default useToggle;
