import React from "react";

const IconEyeToggle = ({ isOpen = false, onClick = () => {} }) => {
  if (isOpen) {
    return (
      <div
        onClick={onClick}
        className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-6"
      >
        <img srcSet="eyeOn.png 2x" alt="" />
      </div>
    );
  } else {
    return (
      <div
        onClick={onClick}
        className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-6"
      >
        <img srcSet="eyeOff.png 2x" alt="" />
      </div>
    );
  }
};

export default IconEyeToggle;
