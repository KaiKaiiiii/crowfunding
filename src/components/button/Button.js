import React from "react";

const Button = ({
  children,
  className,
  type = "button",
  rest,
  isLoading = false,
}) => {
  console.log(rest);
  return (
    <button
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white min-h-[56px] ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className} `}
      type={type}
      {...rest}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-4 rounded-full border-t-transparent animate-spin"></div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
