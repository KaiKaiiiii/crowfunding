import React from "react";

const IconEyeToggle = ({ isOpen = false }) => {
  if (isOpen) {
    return (
      <div className="absolute -translate-y-full top-1/2 right-6">
        <img srcSet="eyeOn.png 2x" alt="" />
      </div>
    );
  } else {
    return (
      <div className="absolute -translate-y-full top-1/2 right-6">
        <img srcSet="eyeOff.png 2x" alt="" />
      </div>
    );
  }
};

export default IconEyeToggle;
