import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div
      className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden
                 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-xl
                 transition-all duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-zinc-100">
          {title}
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;