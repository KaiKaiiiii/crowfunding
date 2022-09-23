import React from "react";
import { Link } from "react-router-dom";

const LayOutAuth = () => {
  return (
    <div className="w-full relative p-6 lg:p-10 ">
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src="/logo.png" alt="" />
      </Link>
    </div>
  );
};

export default LayOutAuth;
