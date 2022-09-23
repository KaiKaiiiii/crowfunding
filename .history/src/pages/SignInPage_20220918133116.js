import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../components/button";

import FormGroup from "../components/common/FormGroup";
import { IconEyeToggle } from "../components/icon";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import useToggleHook from "../hooks/useToggleHook";
import LayOutAuth from "../layout/LayOutAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required("Please fill out this field")
    .email("Must be a valid email"),
  password: yup
    .string()
    .required("Please fill out this field")
    .min(8, "Must be 8 characters"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { value: isOpen, handleToggle: handleToggleEye } = useToggleHook(false);

  const handleSignIn = () => {};
  return (
    <LayOutAuth heading="Sign Up">
      <div className="mb-2 text-center lg:mb-5 ">
        <p className="mb-6 text-xs text-text3 lg:text-lg lg:mb-8">
          Dont have an account?{" "}
          <Link to="/sign-up" className="font-medium text-primary lg:underline">
            Sign up
          </Link>
        </p>
        <button
          type="button"
          className="flex items-center justify-center w-full gap-3 py-2 mb-5 border-2 rounded-lg lg:py-3 dark:border-darkStoke dark:text-white border-whiteStock "
        >
          <img srcSet="/Google.png 2x" alt="" />
          <p className="text-base font-semibold text-text2 dark:text-white ">
            Sign up with google
          </p>
        </button>
      </div>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email*</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            errors={errors?.email}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            control={control}
            name="password"
            type={isOpen ? "text" : "password"}
            placeholder="Enter your password"
            errors={errors?.password}
          >
            <IconEyeToggle
              onClick={handleToggleEye}
              isOpen={isOpen}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Link className="block py-3 text-right text-primary">
          Forgot password
        </Link>

        <Button type="submit" className="w-full bg-primary">
          Sign in
        </Button>
      </form>
    </LayOutAuth>
  );
};

export default SignInPage;
