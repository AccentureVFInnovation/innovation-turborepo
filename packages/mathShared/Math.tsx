import React, { useState } from "react";

export const Math = () => {
  let [inc, setInc] = useState(3);
  return (
    <button type="button" onClick={() => setInc((prev) => prev + 1)}>
      add : {inc}
    </button>
  );
};
