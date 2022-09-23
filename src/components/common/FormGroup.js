import React from "react";

const FormGroup = ({ className, children }) => {
  return (
    <div className={`flex flex-col gap-y-3 mb-2 lg:mb-3 ${className}`}>
      {children}
    </div>
  );
};

export default FormGroup;
