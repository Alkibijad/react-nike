import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "./context/Provider";
import Products from "./pages/Products";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:category" element={<Products />} />
       
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
