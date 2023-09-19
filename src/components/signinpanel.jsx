/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// import React, { useState } from "react";
import registersvg from "../assets/register.svg";

export default function SigninPanel({ onClick }) {
  return (
    <>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button className="btn transparent" onClick={onClick}>
            Sign in
          </button>
        </div>
        <img src={registersvg} className="image" alt="" />
      </div>
    </>
  );
}

// function Panel() {
//   //   const [isSignUpMode, setIsSignUpMode] = useState(false);

//   //   const handleSignUpClick = () => {
//   //     setIsSignUpMode(true);
//   //   };

//   //   const handleSignInClick = () => {
//   //     setIsSignUpMode(false);
//   //   };

//   //   const containerClassList = ["container"];
//   //   if (isSignUpMode) {
//   //     containerClassList.push("sign-up-mode");
//   //   }
//   return (
//     <div className="panels - container">
//       <div className="panel left-panel">
//         <div className="content">
//           <h3>New here ?</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//             ex ratione. Aliquid!
//           </p>
//           <button className="btn transparent">Sign up</button>
//         </div>
//         <img src={logSvg} className="image" alt="" />
//       </div>
//       <div className="panel right-panel">
//         <div className="content">
//           <h3>One of us ?</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             laboriosam ad deleniti.
//           </p>
//           <button className="btn transparent">Sign in</button>
//         </div>
//         <img src={registersvg} className="image" alt="" />
//       </div>
//     </div>
//   );
// }

// export default Panel;
