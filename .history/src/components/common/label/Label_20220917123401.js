import React from "react";

const Label = ({ children, htmlFor, className }) => {
  return (
    <label
      className={`inline-block text-sm font-bold cursor-pointer text-text2 ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
