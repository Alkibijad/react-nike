import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Register from "../login/Register"

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Menu />
  
      <AiOutlineShoppingCart />
    </div>
  );
}

export default Navbar;
