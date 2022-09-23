import React from "react";

const Checkbox = ({ children }) => {
  return (
    <div className="relative items-center justify-center w-6 h-6 rounded-lg border-text4">
      <input type="checkbox" className="hidden" />
    </div>
  );
};

export default Checkbox;
