import React from "react";
import { useController } from "react-hook-form";

const Input = ({ name, control, placeholder, className, type = "text" }) => {
  const { field } = useController({
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${className} py-4 px-6 w-full rounded-xl border-2 border-whiteStock text-sm text-text1 font-medium placeholder:text-text4 `}
        {...field}
      />
    </div>
  );
};

export default Input;
