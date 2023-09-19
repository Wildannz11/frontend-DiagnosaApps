import { useState } from "react";
import LoginPage from "./login";
import SignupPage from "./signup";
import SigninPanel from "./signinpanel";
import SignupPanel from "./signuppanel";
// import logSvg from "../assets/log.svg";
// import registersvg from "../assets/register.svg";

function Container() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <>
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="panels - container">
          <SignupPanel onClick={handleSignInClick} />
          <SigninPanel onClick={handleSignUpClick} />
        </div>
        <div className="forms-container">
          <LoginPage />
          <SignupPage />
        </div>
      </div>
    </>
  );
}

export default Container;
