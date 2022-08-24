import React, { createContext, useEffect, useReducer, useState } from "react";
import API from "../services/ApiCall";
const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "set_initialState":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, {});
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState();
  const [signUp, setSignUp]= useState(false)

  useEffect(() => {
    API.getProducts().then((response) => {
      dispath({ type: "set_initialState", payload: response });
    });
  }, []);

  useEffect(() => {
    getCategories();
  }, [state]);

  function getCategories() {
    let source = new Set();
    state.products &&
      state.products.forEach((product) => {
        source.add(product.source);
      });
    setCategories([...source]);
  }

  function getProductsByCategory(category) {
    state.products &&
      setProductsByCategory(
        state.products.filter((el) => el.source === category)
      );
  }

  return (
    <div>
      <Context.Provider
        value={{
          state,
          categories,
          getProductsByCategory,
          productsByCategory,
          signUp, 
          setSignUp
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export default Context;
