import React from "react";

const IconEyeToggle = ({ isOpen = false }) => {
  if (isOpen) {
    return (
      <div className="absolute translate-x-1/2 right-6">
        <img srcSet="EyeOn.png 2x" alt="" />
      </div>
    );
  } else {
    return (
      <div className="absolute translate-x-1/2 right-6">
        <img srcSet="EyeOff.png 2x" alt="" />
      </div>
    );
  }
};

export default IconEyeToggle;
