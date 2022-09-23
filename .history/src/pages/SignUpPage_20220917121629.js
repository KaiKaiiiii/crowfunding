import React from "react";
import { Link } from "react-router-dom";
import LayOutAuth from "../layout/LayOutAuth";

const SignUpPage = () => {
  return (
    <LayOutAuth heading="Sign Up">
      <p>
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </p>
    </LayOutAuth>
  );
};

export default SignUpPage;
