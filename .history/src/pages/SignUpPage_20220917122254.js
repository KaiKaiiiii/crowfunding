import React from "react";
import { Link } from "react-router-dom";
import LayOutAuth from "../layout/LayOutAuth";

const SignUpPage = () => {
  return (
    <LayOutAuth heading="Sign Up">
      <p className="mb-6 text-xs text-center text-text3 lg:text-lg lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium text-primary lg:underline">
          Sign in
        </Link>
      </p>
      <button
        type="button"
        className="w-full py-2 border-2 rounded-lg lg:py-3 border-whiteStock"
      >
        <img srcSet="/Google.png 2x" alt="" />
        <p className="font-semibold text-text2 ">Sign up with google</p>
      </button>
    </LayOutAuth>
  );
};

export default SignUpPage;
