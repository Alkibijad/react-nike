import React, { useContext, useState } from "react";
import Logo from "../navbar/Logo";
import Context from "../../store/Provider";

function SignUp() {
  const { state, dispatch } = useContext(Context);

  let initialInputValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [inputValues, setInputValues] = useState(initialInputValues)

  function setFormData(e) {
    let copyInitialInputValues = {...inputValues}
    copyInitialInputValues[e.target.name] = e.target.value
    setInputValues(copyInitialInputValues)
    
  }


  
  function handleSubmit(e) { 
    e.preventDefault()
    if (e.target.value) { 
      console.log(e.target.value)
    }
    
  }

  function signUpForm() {
    return (
      <div className="signUp">
        <div className="signUp-view">
          <div className="form-container">
            <Logo />
            <h3>
              your account for <br /> everything nike
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                onInput={(e) => {setFormData(e)}}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={inputValues.firstName}
              />
              <input
                onInput={(e) => {setFormData(e) }}
                type="text"
                name="lastName"
                placeholder="Last Name" />
              <input
                onInput={(e) => {setFormData(e) }}
                type="email"
                name="email"
                placeholder="Email" />
              <input
                onInput={(e) => {setFormData(e) }}
                type="password"
                name="password"
                placeholder="Password" />
              <p>By logging in, you agree to Nike's Privacy Policy and Terms ofUse.</p>
              <button className="btn-black">Sign Up</button>
              <button onClick={() => { dispatch({ type: "display_form", payload: false })}}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "display_form", payload: true });
        }}
      >
        Sign Up
      </button>
      {state.toggleSignUpForm && signUpForm()}
    </div>
  );
}
export default SignUp;
