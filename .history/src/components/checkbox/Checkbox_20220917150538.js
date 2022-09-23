import React from "react";

const Checkbox = ({ children }) => {
  return (
    <div className="flex items-start gap-3 py-3 mb-5">
      <div className="relative items-center justify-center w-6 h-6 rounded-lg border-text4">
        <input type="checkbox" className="hidden" />
      </div>
    </div>
  );
};

export default Checkbox;
