import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Provider";

function Navbar() {
  const {state} = useContext(Context);
  const [products, setProducts] = useState([]);

  const source = [];

  useEffect(() => {
    setProducts(state.products);
  }, [state]);

  products && getProducts();

  function getProducts() {
    for (let i = 0; i < products.length; i++) {
      !source.includes(products[i].source) && source.push(products[i].source);
    }
  }

  return (
    <>
      <ul className="navbar-items">
        {source.map((item, index) => {
        
          return (
            <li key={index}>
              <Link to={item + "/" + item }>{item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Navbar;
