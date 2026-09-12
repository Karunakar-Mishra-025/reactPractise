import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-bold">
              Shoply 
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
              Quality products, simple shopping, and a smooth experience
              from cart to checkout.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Shop
            </h3>

            <div className="mt-4 space-y-3">
              <Link
                to="/products"
                className="block text-sm text-zinc-400 transition hover:text-white"
              >
                Products
              </Link>

              <Link
                to="/cart"
                className="block text-sm text-zinc-400 transition hover:text-white"
              >
                Cart
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <Link
                to="/about"
                className="block text-sm text-zinc-400 transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block text-sm text-zinc-400 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Support
            </h3>

            <div className="mt-4 space-y-3">
              <Link
                to="/privacy"
                className="block text-sm text-zinc-400 transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="block text-sm text-zinc-400 transition hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} YourStore. All rights reserved.</p>

          <p>Secure shopping · Easy returns</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;