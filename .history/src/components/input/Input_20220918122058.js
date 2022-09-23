import React from "react";
import { useController } from "react-hook-form";
import propTypes from "prop-types";
const Input = ({
  name,
  control,
  placeholder,
  className,
  type = "text",
  errors,
  children,
}) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={` py-4 px-6 outline-none w-full rounded-xl  border-2 border-whiteStock text-sm text-text1 font-medium placeholder:text-text4 ${className} ${
          errors ? "border-error placeholder:opacity-0 text-opacity-50" : ""
        }`}
        {...field}
      />
      {children}
      {errors?.message && (
        <span className="absolute pointer-events-none input-error translate-y-3/4 left-6 text-error">
          {errors?.message}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  control: propTypes.any,
  name: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  type: propTypes.string,
};
export default Input;
