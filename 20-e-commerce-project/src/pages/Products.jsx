import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    {
      title: "Men",
      link: "men",
      description: "Explore our collection for men.",
      image:
        "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Women",
      link: "women",
      description: "Discover our collection for women.",
      image:
        "https://images.unsplash.com/photo-1704926273322-86addc31fbf2?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Kids",
      link: "kids",
      description: "Fun and stylish picks for kids.",
      image:
        "https://images.unsplash.com/photo-1590480598135-3be152c87913?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 px-8 py-12">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-100">
          Shop by Category
        </h1>

        <p className="mt-2 text-zinc-400">
          Find something perfect for everyone
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.title} to={category.link}>
            <Card
              title={category.title}
              description={category.description}
              image={category.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
