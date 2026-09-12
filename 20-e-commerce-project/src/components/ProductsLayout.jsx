import React from "react";
import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
