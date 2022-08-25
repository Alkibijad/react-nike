import React, { useContext, useEffect } from "react";
import Logo from "../navbar/Logo";
import Context from "../../store/Provider";

function SignUp() {
  const { signUp, setSignUp } = useContext(Context);

  useEffect(() => {
    if (signUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [signUp]);

  return (
    <div className="signUp">
      {signUp && (
        <div className="signUp-view">
          <div className="form-container">
            <Logo />
            <h3>
              your account for
              <br /> everything nike
            </h3>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <p>
                By logging in, you agree to Nike's Privacy Policy and Terms of
                Use.{" "}
              </p>
              <button className="btn-black">Sign Up</button>
              <button
                className="btn-black"
                type="button"
                onClick={() => {
                  setSignUp(false);
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
