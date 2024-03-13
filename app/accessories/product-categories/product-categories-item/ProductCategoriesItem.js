import React from "react";
import "./productCategoriesItem.css";
import Link from "next/link";
const ProductCategoriesItem = (props) => {
  let { name, image } = props;
  return (
    <div className="child-card">
      <Link href={`/ProductDetails`}>
      <div className="card categories-card m-0">
        <div className="categories-card-img d-flex align-items-center justify-content-center">
          <img src={image.src} className="card-img-top img-fluid" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCategoriesItem;
