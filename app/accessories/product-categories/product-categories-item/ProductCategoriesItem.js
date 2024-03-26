import React from "react";
import "./productCategoriesItem.css";
import Link from "next/link";
const ProductCategoriesItem = ({ name, image, slug }) => {
  const categoryName = encodeURIComponent(slug);
  return (
    <div className="child-card">
      <a href={`/category/${categoryName}`}>
        <div className="card categories-card m-0">
          <div className="categories-card-img d-flex align-items-center justify-content-center">
            <img src={image} className="card-img-top img-fluid" alt={name} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCategoriesItem;
