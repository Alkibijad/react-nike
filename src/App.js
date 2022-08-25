import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import API from "./services/ApiCall";
import Context from "./store/Provider";

function App() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    API.getProducts().then((response) => {
      dispatch({ type: "set_initialState", payload: response.products });
    });
  }, []);

  return (
    state.product && (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:category" element={<Products />} />
        </Routes>
      </div>
    )
  );
}

export default App;
