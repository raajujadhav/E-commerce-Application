import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopCategory } from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignUp } from "./Pages/LoginSignUp";
import { Footer } from "./Components/Footer/Footer";
import banner_mens from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={banner_mens} categary="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={banner_women} categary="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} categary="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
