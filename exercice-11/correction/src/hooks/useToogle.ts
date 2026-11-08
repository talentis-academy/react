import { useState } from "react";

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => {
    setValue(!value);
  };

  return { value, toggle };
}

export default useToggle;
