import React from "react";
import Card2 from "../components/Card2";

const Men = () => {
  const products = [
    {
      title: "Classic White Formal Shirt",
      description: "Explore our collection of stylish shirts for men.",
      price: 1999,
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaXJ0fGVufDB8fDB8fHww",
    },
    {
      title: "Men's Relaxed Fit Blue Trousers",
      description: "Discover comfortable and modern pants for men.",
      price: 2459,
      image: "https://plus.unsplash.com/premium_photo-1783318941521-9ec10013a55d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg2fHxtZW5zJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Multicolor Retro Low-Top Sneakers",
      description: "Step up your style with our men's footwear.",
      price: 1499,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNob2VzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-100">
          Men's Collection
        </h1>

        <p className="mt-2 text-zinc-400">
          Discover our latest collection for men
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card2
            key={product.title}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Men;