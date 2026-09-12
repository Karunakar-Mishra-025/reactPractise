import React, { useState, useContext } from "react";
import { CheckCircle2 } from "lucide-react";
import { CartContext } from "../context/CartContext";

const Card2 = ({ id, image, title, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const { getId, isAddedToCart, updateId, addProductToCart } =
    useContext(CartContext);

  const addedToCart = isAddedToCart(title);

  const addProduct = () => {
    const product = {
      id: getId(),
      image,
      title,
      description,
      price,
    };

    addProductToCart(product, quantity);
    updateId();

    // Show success animation
    setIsAdded(true);

    // Reset local animation after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div
      className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden
                 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-xl
                 transition-all duration-300"
    >
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Product Details */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-zinc-100">
          {title}
        </h2>

        <span className="text-sm text-zinc-400">
          {description}
        </span>

        {/* Price */}
        <div className="mt-3">
          <span className="text-2xl font-bold text-zinc-100">
            ₹{price}
          </span>
        </div>

        {/* Cart Action Area */}
        <div className="relative mt-5 min-h-[100px]">

          {/* Quantity + Add to Cart */}
          <div
            className={`transition-all duration-300 ease-out ${
              isAdded || addedToCart
                ? "opacity-0 scale-95 -translate-y-3 pointer-events-none"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            {/* Quantity */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">
                Quantity
              </span>

              <div className="flex items-center border border-zinc-700 rounded-lg overflow-hidden">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 text-zinc-300 hover:bg-zinc-800 transition"
                >
                  -
                </button>

                <span className="px-4 py-1 text-zinc-100 border-x border-zinc-700">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 text-zinc-300 hover:bg-zinc-800 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={addProduct}
              className="mt-5 w-full bg-zinc-100 text-zinc-950
                         py-2.5 rounded-lg font-medium
                         hover:bg-zinc-300
                         active:scale-[0.98]
                         transition-all duration-200"
            >
              Add to Cart
            </button>
          </div>

          {/* Success Message */}
          <div
            className={`absolute inset-0 flex items-center justify-center
                        transition-all duration-500 ease-out ${
                          isAdded || addedToCart
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-90 translate-y-3 pointer-events-none"
                        }`}
          >
            <div
              className="w-full flex items-center justify-center gap-3
                         p-3 rounded-lg
                         bg-green-500/10 border border-green-500/30
                         text-green-400"
            >
              <CheckCircle2
                size={22}
                className={`${
                  isAdded ? "animate-[bounce_0.5s_ease-out]" : ""
                }`}
              />

              <span className="font-medium">
                Product added to cart!
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card2;
