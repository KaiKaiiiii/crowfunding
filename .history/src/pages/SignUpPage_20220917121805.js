import React from "react";
import { Link } from "react-router-dom";
import LayOutAuth from "../layout/LayOutAuth";

const SignUpPage = () => {
  return (
    <LayOutAuth heading="Sign Up">
      <p className="text-xs text-text3 lg:text-lg ">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium text-primary">
          Sign in
        </Link>
      </p>
    </LayOutAuth>
  );
};

export default SignUpPage;
