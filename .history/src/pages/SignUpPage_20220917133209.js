import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import LayOutAuth from "../layout/LayOutAuth";

const SignUpPage = () => {
  const { handleSubmit, control } = useForm();
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
      <form>
        <FormGroup>
          <Label htmlFor="name">Full name*</Label>
          <Input control={control} name="name" placeholder="Jhon Doe"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email*</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
          ></Input>
        </FormGroup>
        <div className="flex items-start gap-3 py-3">
          <input type="checkbox" className="w-6 h-6 rounded-lg" />
          <p>
            I agree to the{" "}
            <span className="underline text-secondary ">Terms of Use</span> and
            have read and understand the{" "}
            <span className="underline text-secondary">Privacy policy.</span>
          </p>
        </div>
        <Button type="submit" className="w-full"></Button>
      </form>
    </LayOutAuth>
  );
};

export default SignUpPage;
