import React from "react";
import { lazy } from "react";
import { Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

// const SignUpPage = lazy(() => import("./pages/SignUpPage"));
// const SignInPage = lazy(() => import("./pages/SignInPage"));

function App() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa
      mollitia molestiae eligendi dolorem tempora a tenetur facere aliquam
      aperiam, fuga ea optio quas labore nesciunt quos veniam consectetur
      magnam.
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
