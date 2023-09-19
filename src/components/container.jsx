import { useState } from "react";
import LoginPage from "./login";
import SignupPage from "./signup";
// import SigninPanel from "./signinpanel";
// import SignupPanel from "./signuppanel";
import logSvg from "../assets/log.svg";
import registersvg from "../assets/register.svg";

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
        <div className="forms-container">
          <LoginPage />
          <SignupPage />
        </div>
        <div className="panels - container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button className="btn transparent" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
            <img src={logSvg} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src={registersvg} className="image" alt="" />
          </div>
          {/* <SignupPanel onClick={handleSignInClick} />
          <SigninPanel onClick={handleSignUpClick} /> */}
        </div>
      </div>
    </>
  );
}

export default Container;
