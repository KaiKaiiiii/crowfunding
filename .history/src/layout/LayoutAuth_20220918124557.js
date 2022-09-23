import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import ErrorComponent from "../components/common/ErrorComponent";

const LayOutAuth = ({ children, heading }) => {
  return (
    <div className="relative w-full min-h-screen p-6 lg:p-10 bg-lite dark:bg-darkBG isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="absolute bottom-0 left-0 right-0 z-[-1] pointer-events-none "
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding" />
      </Link>
      <div className="bg-white lg:w-[556px] py-8 lg:py-12 px-5 lg:px-16 mx-auto rounded-xl">
        <h1 className="mb-2 text-lg font-semibold text-center capitalize lg:text-xl text-text1 lg:mb-3">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default withErrorBoundary(LayOutAuth, {
  FallbackComponent: ErrorComponent,
});
