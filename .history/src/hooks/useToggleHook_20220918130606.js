import React from "react";
import { useState } from "react";

const useToggleHook = ({ initialValue = false }) => {
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => {
    setValue(!value);
  };
  return { value, handleToggle };
};

export default useToggleHook;
