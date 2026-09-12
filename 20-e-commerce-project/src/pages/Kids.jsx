import React from "react";
import Card2 from "../components/Card2";

const Kids = () => {
  const products = [
    {
      title: "Snow White Party Dress",
      description: "Fun, comfortable and stylish clothing for kids.",
      price: 1999,
      image: "https://images.unsplash.com/photo-1695262620869-fedab63bcc41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxraWRzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Blossom Kids Sneakers",
      description: "Comfortable and playful footwear for kids.",
      price: 999,
      image: "https://images.unsplash.com/photo-1742390671595-29fae0a07ea2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGtpZHMlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "ColorPop Sunglasses",
      price: 899,
      description: "Complete their look with fun accessories.",
      image: "https://images.unsplash.com/photo-1728957115983-6778a011f3b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGtpZHMlMjBzdW5nbGFzZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-100">
          Kids' Collection
        </h1>

        <p className="mt-2 text-zinc-400">
          Discover our latest collection for kids
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

export default Kids;