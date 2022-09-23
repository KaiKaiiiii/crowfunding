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
        className="w-full border-2 rounded-lg border-whiteStock"
      ></button>
    </LayOutAuth>
  );
};

export default SignUpPage;
