import React from "react";

const Button = ({ children, className, type }) => {
  return (
    <button
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
