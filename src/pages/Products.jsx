import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../store/Provider";

function Products() {

  const {state } = useContext(Context);
  let { category } = useParams();

  function filterProduct() { 
    return state.product.map((el, index) => { 
      if (el.source === category) { 
        return <p key={index}>{ el.title}</p>
      }
    })
  }


  return <div className="products-view">
    { filterProduct()}
  </div>;
}

export default Products;
