import React from "react";

function ProductCard(props) {
  const { src, href } = props; // Destructure src from props object

  return (
    <div className="ProductCard">
      <div>
        <img className="w-full" src={src} alt="Product Image" />
        <h1 className="title">Name of Product here</h1>
        <p className="price">200,000</p>
        <a href={href} className="more text-blue-400">
          See more
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
