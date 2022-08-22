import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "./context/Provider";
import Men from "./pages/Men";
import Woman from "./pages/Woman";
import Kids from "./pages/Kids";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Men/:Men" element={<Men />} />
          <Route path="Woman/:Woman" element={<Woman />} />
          <Route path="Kids/:Kids" element={<Kids />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
