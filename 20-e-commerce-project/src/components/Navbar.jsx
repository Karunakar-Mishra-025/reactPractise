import React from "react";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
    const {totalItems} = useContext(CartContext)
    let totalProducts = totalItems()
    console.log(totalProducts);
    
//   const [totalProducts, settotalProducts] = useState(10);
  return (
    <nav className="w-full h-16 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-8">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-white"> Shoply </h1>
      </div>
      {/* Menu */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="relative inline-flex items-center text-zinc-400 hover:text-white transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />

          {totalProducts > 0 && (
            <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full">
              {totalProducts}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
