import React from "react";
import LayoutAuth from "../layout/LayoutAuth";

const SignInPage = () => {
  return (
    <LayoutAuth heading="Sign In">
      <div className="mb-2 text-center lg:mb-5 ">
        <p className="mb-6 text-xs text-text3 lg:text-lg lg:mb-8">
        Dont have an account? 
          <Link to="/sign-in" className="font-medium text-primary lg:underline">
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
          <Label htmlFor="name">Full name*</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            errors={errors?.name}
          ></Input>
        </FormGroup>
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
            placeholder="Create a password"
            errors={errors?.password}
          >
            <IconEyeToggle
              onClick={handleToggleEye}
              isOpen={isOpen}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Checkbox checked={acceptTerms} onClick={handleToggleCheckBox}>
          <p className="dark:text-text3">
            I agree to the{" "}
            <span className="underline text-secondary ">Terms of Use</span> and
            have read and understand the{" "}
            <span className="underline text-secondary">Privacy policy.</span>
          </p>
        </Checkbox>

        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayOutAuth>
  );
};

export default SignInPage;
