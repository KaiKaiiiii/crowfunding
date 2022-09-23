import React from "react";
import { Link } from "react-router-dom";

const LayOutAuth = ({ children, heading }) => {
  return (
    <div className="w-full relative p-6 lg:p-10 bg-lite min-h-screen ">
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="" />
      </Link>
      <div className="bg-white lg:w-[556px] py-8 lg:py-12 px-5 lg:px-16"></div>
    </div>
  );
};

export default LayOutAuth;
