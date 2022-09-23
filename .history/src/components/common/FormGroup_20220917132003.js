import React from "react";

const FormGroup = ({ className, children }) => {
  return <div className={`flex flex-col gap-y-3 ${className}`}>{children}</div>;
};

export default FormGroup;
