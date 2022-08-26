import React, { useContext, useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Context from "../../store/Provider";

function Registar() {
  const { state } = useContext(Context);

  return (
    <div className="register">
      {state.login.signUp ? <Login /> : <SignUp />}
    </div>
  );
}

export default Registar;
