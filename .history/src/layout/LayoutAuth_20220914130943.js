import React from "react";
import { Link } from "react-router-dom";

const LayOutAuth = ({ children, heading }) => {
  return (
    <div className="w-full relative p-6 lg:p-10 bg-lite min-h-screen ">
      <img
        src="/ellipse.png"
        alt="bg"
        className="absolute bottom-0 left-0 right-0 z-[0] isolate"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding" />
      </Link>
      <div className="bg-white lg:w-[556px] py-8 lg:py-12 px-5 lg:px-16 mx-auto"></div>
    </div>
  );
};

export default LayOutAuth;
