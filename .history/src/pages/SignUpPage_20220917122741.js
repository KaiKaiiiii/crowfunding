import React from "react";
import { Link } from "react-router-dom";
import LayOutAuth from "../layout/LayOutAuth";

const SignUpPage = () => {
  return (
    <LayOutAuth heading="Sign Up">
      <div className="mb-2 text-center lg:mb-5 ">
        <p className="mb-6 text-xs text-text3 lg:text-lg lg:mb-8">
          Already have an account?{" "}
          <Link to="/sign-in" className="font-medium text-primary lg:underline">
            Sign in
          </Link>
        </p>
        <button
          type="button"
          className="flex items-center justify-center w-full gap-3 py-2 mb-5 border-2 rounded-lg lg:py-3 border-whiteStock "
        >
          <img srcSet="/Google.png 2x" alt="" />
          <p className="text-base font-semibold text-text2 ">
            Sign up with google
          </p>
        </button>
        <p className="text-xs lg:text-sm text-text2">Or sign up with email</p>
      </div>
    </LayOutAuth>
  );
};

export default SignUpPage;
