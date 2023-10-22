import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./Components/Navbar";

import Store from "./Store/Store";

import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
