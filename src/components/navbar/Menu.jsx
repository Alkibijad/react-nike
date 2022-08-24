import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Provider";

function Navbar() {
  const { categories, setSignUp} = useContext(Context);
 

  return (
    <>
      <ul className="navbar-items">
        {categories.map((item, index) => {
          return (
            <li key={index}>
              <Link to={  "/product/" + item }>{item}</Link>
            </li>
          );
        })}
        <li onClick={() => { setSignUp(true) }}>Sign up</li>
      </ul>
    </>
  );
}

export default Navbar;
