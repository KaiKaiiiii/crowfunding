import React from "react";

const Button = ({ children, className, type = "button", rest, isLoading }) => {
  console.log(rest);
  return (
    <button
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white ${className} `}
      type={type}
      {...rest}
    >
      {isLoading ? <div className=""></div> : children}
    </button>
  );
};

export default Button;
