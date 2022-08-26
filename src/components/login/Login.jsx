import React, { useContext, useState } from "react";
import Logo from "../navbar/Logo";
import Context from "../../store/Provider";

function Login() {
  const { state, dispatch } = useContext(Context);

  return <p>Login</p>;
}

export default Login;
