'use client';
import React, { useRef, useContext, useState } from "react";
import { MdShoppingBag, MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
import products from "./CategoryData";
import { useRouter } from 'next/navigation';

import CartContext from "../../context/CartContext";

export default function ProductDetails() {
  const { addItemToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);
    const fullURL = window.location.href;
    const parts = fullURL.split('/');
    const slug = parts[parts.length - 1];
    const product = products.find(product => product.slug === slug);
   // console.log(product);
    const addToCartHandler = () => {
      
      // Call addItemToCart function from context
      addItemToCart({
        product: product.id,
        name: product.name,
        price: product.price,
        image: product.mainImage,
        quantity: 1,
      });
      setShowMessage(true);
    };
  if (!product) {
    return (
      <div className="container py-5">
        <h2>No product found</h2>
      </div>
    );
  }

  return (
    <section className="py-5 productDetails">
      <div className="container">
        <div className="row gx-5">
          <aside className="col-lg-6">
            <div className="border rounded-4 mb-3 d-flex justify-content-center">
              <div
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
              >
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    margin: "auto",
                  }}
                  className="rounded-4 fit"
                  src={product.mainImage} // Use the mainImage from product data
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mb-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                >
                  <img
                    width="60"
                    height="60"
                    className="rounded-2"
                    src={image} // Use image URLs from product data
                  />
                </button>
              ))}
            </div>
          </aside>
          <main className="col-lg-6">
            <div className="ps-lg-3">
              <h4 className="title text-dark">{product.name}</h4>
              <div className="d-flex flex-row my-3">
                <span className="text-muted">
                  <MdShoppingBasket /> {product.orders} orders
                </span>
                <span className="text-success ms-2">
                  {product.inStock ? "In stock" : "Out of stock"}
                </span>
              </div>

              <div className="mb-3">
                <span className="h5">${product.price}</span>
                <span className="text-muted">/per box</span>
              </div>

              <p>{product.description}</p>

              <div className="row">
                <dt className="col-3">Type:</dt>
                <dd className="col-9">{product.type}</dd>

                <dt className="col-3">Color</dt>
                <dd className="col-9">{product.color}</dd>

                <dt className="col-3">Material</dt>
                <dd className="col-9">{product.material}</dd>

                <dt className="col-3">Brand</dt>
                <dd className="col-9">{product.brand}</dd>
              </div>

              <hr />

              <div className="row mb-4">
                <div className="col-md-4 col-6 mb-3">
                  <label className="mb-2 d-block">Quantity</label>
                  <div className="input-group mb-3" style={{ width: "170px" }}>
                    <select
                      style={{ width: "100px" }}
                      className="form-select me-4"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>

              
              <button
                  className="btn btn-primary shadow-0"
                  onClick={addToCartHandler}
                 
                >
                  <i className="fa fa-shopping-cart mr-2"></i>
                  Add to cart
                </button>
                {showMessage && <div className="alert alert-success">Item added to cart! <a href="/cart">Go to Cart</a></div>}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
