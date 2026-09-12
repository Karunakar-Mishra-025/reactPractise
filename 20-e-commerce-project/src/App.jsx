import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import ProductsLayout from "./components/ProductsLayout";
import Kids from "./pages/Kids";
import BackButton from "./components/BackButton";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <BackButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} /> */}
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<Products />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
