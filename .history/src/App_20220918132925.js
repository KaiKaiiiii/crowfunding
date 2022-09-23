import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Router, Routes, Route } from "react-router-dom";
import ErrorComponent from "./components/common/ErrorComponent";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

function App() {
  return (
    <Suspense fallback={<ErrorComponent></ErrorComponent>}>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
