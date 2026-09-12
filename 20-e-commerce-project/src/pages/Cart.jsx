import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, removeProduct } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-zinc-950 text-zinc-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="flex min-h-[70vh] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-2xl">
              🛒
            </div>

            <h2 className="text-2xl font-semibold">Your cart is empty</h2>

            <p className="mt-2 max-w-md text-zinc-400">
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link
              to="/products"
              className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8 flex justify-center">
              <div className="text-center">
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                  Your Shopping Bag
                </p>

                <h1 className="mt-2 text-3xl md:text-4xl font-bold">
                  Cart Details
                </h1>

                <p className="mt-2 text-zinc-400">
                  {cart.length} {cart.length === 1 ? "item" : "items"} in your
                  cart
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-zinc-700"
                  >
                    {/* Product Image */}
                    <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-800 sm:h-32 sm:w-28">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <h2 className="truncate text-base font-semibold sm:text-lg">
                          {item.product.title}
                        </h2>

                        <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
                          {item.product.description}
                        </p>
                      </div>
                      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                        <button
                          onClick={() => removeProduct(item.product.id)}
                          className="absolute top-3 right-3 p-2 rounded-lg
                        text-zinc-400 hover:text-red-400
                        hover:bg-zinc-800 transition-colors"
                          aria-label="Remove product"
                        >
                          <Trash2 size={18} />
                        </button>

                        {/* Product content */}
                        <h2 className="text-xl font-semibold text-zinc-100">
                          {item.product.title}
                        </h2>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                        {/* Quantity */}
                        <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
                          <span className="text-sm font-medium text-zinc-400">
                            Quantity
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {item.quantity}
                          </span>
                        </div>
                        {/* Price */}
                        <div className="text-right">
                          <p className="text-lg font-bold">
                            ₹
                            {(
                              item.product.price * item.quantity
                            ).toLocaleString("en-IN")}
                          </p>

                          {item.quantity > 1 && (
                            <p className="text-xs text-zinc-500">
                              ₹{item.product.price.toLocaleString("en-IN")} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="h-fit rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:sticky lg:top-24">
                <h2 className="text-xl font-semibold">Order Summary</h2>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span className="text-zinc-100">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-zinc-400">
                    <span>Shipping</span>
                    <span className="text-zinc-100">
                      ₹{shipping.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="border-t border-zinc-800 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold">Total</span>

                      <span className="text-xl font-bold">
                        ₹{total.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-xl bg-white py-3.5 font-semibold text-zinc-900 transition hover:bg-zinc-200 active:scale-[0.98]">
                  Proceed to Checkout
                </button>

                <p className="mt-4 text-center text-xs text-zinc-500">
                  Secure checkout · Free returns
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
