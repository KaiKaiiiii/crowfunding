import React from "react";

const Checkbox = ({ children, checked }) => {
  return (
    <div className="flex items-start gap-3 py-3 mb-5">
      <div className="">
        <input type="checkbox" className="hidden" />
        <div
          className={`relative items-center justify-center w-5 h-5 border rounded-md border-text4 ${
            checked ? "border-primary bg-primary  text-white" : ""
          }`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Checkbox;
