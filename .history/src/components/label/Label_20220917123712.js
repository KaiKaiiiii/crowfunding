import React from "react";

const Label = ({ children, htmlFor, className }) => {
  return (
    <label
      className={`inline-block text-sm font-medium cursor-pointer text-text2 capitalize ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
