// POINT useEffectの練習

import { useState, useEffect } from "react";

const Example = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    checked && window.alert("checked!");
  }, [checked]);

  return (
    <label>
      <input
        type={"checkbox"}
        value={checked}
        onClick={() => setChecked((checked) => !checked)}
      />
      click me
    </label>
  );
};

export default Example;
