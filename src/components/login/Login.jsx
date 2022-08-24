import React, { useState } from 'react'
import Logo from '../navbar/Logo';

function Login() {



    const [login, setLogin] = useState(false);

    return (
      <div className="signUp">
        <p onClick={() => {setLogin(true)}}>Sign Up</p>
  
        {login && ( <div className="signUp-view">
                         <div className="form-container"> 
                          <Logo/>
                          <h3>your account for<br/> everything nike</h3>
                              <form>
                                  <input type="text" placeholder="First Name" />
                                  <input type="text" placeholder="Last Name" />
                                  <input type="email" placeholder="Email" />
                                  <input type="password" placeholder="Password" />
                                  <p>By logging in, you agree to Nike's Privacy Policy and Terms of Use. </p>
                                  <button className="btn-black">Sign Up</button>
                                  <button type="button" onClick={() => {setLogin(false)}}>Cancel</button>
                              </form>
                       </div>
                    </div>
                 )}
      </div>
    );
  }


export default Login