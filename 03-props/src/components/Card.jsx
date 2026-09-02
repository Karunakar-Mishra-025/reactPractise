import React from "react";

const Card = (data) => {
  return (
    <div className="card">
      <img
        src={data.image}
        alt=""
      />
      <h1>{data.title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <button>Learn More</button>
    </div>
  );
};

export default Card;
