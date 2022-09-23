import React from "react";

const Input = ({ control, placeholder, className }) => {
  return (
    <div className="relative">
      <input
        control
        type="text"
        placeholder={placeholder}
        className={`${className} py-4 px-6 w-full rounded-xl border-2 border-whiteStock text-sm text-text1 font-medium placeholder:text-text4 `}
      />
    </div>
  );
};

export default Input;
