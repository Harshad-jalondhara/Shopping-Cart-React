import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Navbar from "./pages/Navbar";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
      <CartProvider> {/* main cartProvider component se ane under cartcontext a bathu ave */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
