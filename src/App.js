import { Routes, Route } from "react-router-dom";
import { Provider } from "./context/Provider";
import Products from "./pages/Products";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/login/Register"

function App() {
  return (
    <div className="App">
      <Provider>
          <Register/>
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
