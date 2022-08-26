import React, { useContext, useEffect } from "react";
import Amount from "../components/Amount";
import Context from "../store/Provider";

function CartPage() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    showInCartProducts();
  }, [state.inCart]);

  function showInCartProducts() {
    return state.inCart.map((el, index) => {
      return <div key={index}>{productInCart(el, index)}</div>;
    });
  }

  function productInCart(el, index) {
    return (
      <div className="productInCart">
        <div className="productInCart-image">
          <img src={el.img} alt="" />
        </div>
        <div className="productInCart-details">
          <h4>{el.title}</h4>
          <p>{el.source}'s Shoes</p>
          <p>Item price:${el.price}</p>
          <div className="items-count">
            <Amount value={-1} index={index} />
            <p>{el.count}</p>
            <Amount value={1} index={index} />
          </div>

          <p>Total${el.total}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cartPage">
      <button
        className="btn-black"
        onClick={() => {
          dispatch({ type: "toggle_cart", payload: false });
        }}
      >
        X
      </button>
      {state.inCart ? showInCartProducts() : <h2> No products selected</h2>}
      {state.inCart && <button onClick={() => { dispatch({type: "checkout"})}}>Checkout</button>}
     
    </div>
  );
}

export default CartPage;
