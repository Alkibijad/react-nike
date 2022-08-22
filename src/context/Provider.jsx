import { LogTimings } from "concurrently";
import React, { createContext, useEffect, useReducer, useState } from "react";

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
  const [viewProducts, setViewProducts] = useState("");
  const [selePro, setSelectedPro] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    xx();
  }, [viewProducts]);

  function xx() {
    // let selected = Object.keys(viewProducts)
    // console.log(selected);
  
    
  }

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/shop");
    const data = await response.json();
    dispath({ type: "set_initialState", payload: data });
  };

  return (
    <div>
      <Context.Provider value={{ state, setViewProducts }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default Context;
