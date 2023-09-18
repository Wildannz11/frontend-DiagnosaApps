import { useState } from "react";
import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import Panel from "./components/panel";

function App() {
  // const containerClassList = ["container"];
  // if (isSignUpMode) {
  //   containerClassList.push("sign-up-mode");
  // }
  return (
    <>
      <div className="container">
        <div className="forms-container">
          <LoginPage />
          <SignupPage />
        </div>
        <Panel />
      </div>
    </>
  );
}

export default App;
