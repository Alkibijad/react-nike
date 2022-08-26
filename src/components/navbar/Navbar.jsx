import React, { useContext } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Context from "../../store/Provider";
import Registar from "../login/Register";


function Navbar() {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="navbar">
      <Logo />
      <Menu />
      <Registar/>
      <AiOutlineShoppingCart size={35} onClick={() => { 
        dispatch({type: "toggle_cart", payload: true})
      } } />
    </div>
  );
}

export default Navbar;
