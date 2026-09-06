import React from "react";

const Card = ({ elem }) => {
  return (
    <div>
      <a href={elem.url}>
        <img
          src={`https://picsum.photos/id/${elem.id}/400/250`}
          className="
            w-full
            object-cover
            rounded
            border border-zinc-700
            hover:scale-105
            hover:shadow-xl
            transition
            duration-300
          "
          alt={elem.author}
          loading="lazy"
        />

        <h1 className="text-zinc-100 text-xl">{elem.author}</h1>
      </a>
    </div>
  );
};

export default Card;
