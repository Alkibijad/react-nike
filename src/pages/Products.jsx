import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../store/Provider";

function Products() {
  const { state, dispatch } = useContext(Context);
  let { category } = useParams();

  function filterProduct() {
    return state.product.map((el, index) => {
      if (el.source === category) {
        return (
          <div className="product-card" key={index}>
            <div className="product-card-image">
              <img src={el.img} alt="" />
            </div>
            <div className="product-card-details">
              <h3>{el.title}</h3>
              <h4>{el.source}'s Shoes</h4>
              <p>${el.price}</p>
            

              <button className="btn-black">
                <a className="btn-black" href={el.url}>
                  See more
                </a>
              </button>
              <button className="btn-black" onClick={() => { dispatch({ type: "add_to_cart", payload: el })}}> 
                Add To Cart
              </button>
            </div>
          </div>
        );
      }
    });
  }

  return <div className="products-view">{filterProduct()}</div>;
}

export default Products;
