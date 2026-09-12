import React from "react";
import Card2 from "../components/Card2";

const Women = () => {
  const products = [
    {
      title: "Floral Print Midi Dress",
      description: "Discover elegant and stylish dresses for women.",
      price: 2999,
      image: "https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Red Floral Off-Shoulder Crop Tops",
      description: "Explore our collection of trendy tops for women.",
      price: 1899,
      image: "https://images.unsplash.com/photo-1525550133628-43e58e551e6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Floral Print Stiletto Heels",
      description: "Complete your look with our women's footwear.",
      price: 1299,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW5zJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-100">
          Women's Collection
        </h1>

        <p className="mt-2 text-zinc-400">
          Discover our latest collection for women
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card2
            key={product.title}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Women;