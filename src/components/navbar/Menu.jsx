import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../store/Provider";

function Navbar() {
  const { state } = useContext(Context);

  return (
    <>
      <ul className="navbar-items">
        {state.category.map((item, index) => {
          return (
            <li key={index}>
              <Link to={"/product/" + item}>{item}</Link>
            </li>
          );
        })}
         {/* <li onClick={() => { setSignUp(true) }}>Sign up</li> */}
      </ul>
    </>
  );
}

export default Navbar;
