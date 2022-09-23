import React from "react";
import { useState } from "react";

const useToggleHook = ({ initialValue = false }) => {
  const [value, setValue] = useState(false);

  const handleToggle = () => {
    setValue(!value);
  };
  return { value, setValue };
};

export default useToggleHook;
