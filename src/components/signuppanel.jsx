import logSvg from "../assets/log.svg";

export default function SignupPanel({ onClick }) {
  return (
    <>
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button className="btn transparent" onClick={onClick}>
            Sign up
          </button>
        </div>
        <img src={logSvg} className="image" alt="" />
      </div>
    </>
  );
}
