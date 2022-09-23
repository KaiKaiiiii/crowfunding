import React from "react";
import { Link } from "react-router-dom";

const LayOutAuth = ({ children, heading }) => {
  return (
    <div className="w-full relative p-6 lg:p-10 bg-lite ">
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="" />
      </Link>
      {children}
    </div>
  );
};

export default LayOutAuth;
