import React, { createContext, useEffect, useReducer, useState } from "react";
import API from "../services/ApiCall";
const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "set_initialState":
      state = action.payload;
      return state ;
    default:
      return state;
  }
};


export const Provider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, {});
  const [categories, setCategories] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState()


  function getProductsByCategory(category) { 


    state.products && setSelectedProducts(state.products.filter((el) => el.source === category))

  }


  useEffect(() => {
    API.getProducts().then((response) => {
      dispath({ type: "set_initialState", payload: response });
    });
  }, []);
  useEffect(() => {
    getCateries();
  }, [state]);
 


  function getCateries() {
    let source = new Set();
    state.products &&
      state.products.forEach((product) => {
        source.add(product.source);
      });
    setCategories([...source]);
  }

  return (
    <div>
      <Context.Provider value={{  state, categories, getProductsByCategory, selectedProducts }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default Context;
