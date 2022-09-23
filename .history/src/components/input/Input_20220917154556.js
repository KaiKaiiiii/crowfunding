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
}) => {
  console.log(errors);
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
        className={` py-4 px-6 w-full rounded-xl border-2 border-whiteStock text-sm text-text1 font-medium placeholder:text-text4 ${className}`}
        {...field}
      />
      {/* {errors.message && (
        <span className="absolute -translate-y-1/2 left-6 ">
          {" "}
          {errors.message}
        </span>
      )} */}
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
