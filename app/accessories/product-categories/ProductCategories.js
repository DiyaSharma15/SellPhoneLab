import React from "react";
import "./productCategories.css";
import ProductCategoriesItem from "./product-categories-item/ProductCategoriesItem";

const CategoriesItem = [
  {
    name: "Phone Cases",
    image: "/Images/phone-photos-9-1.jpg.webp",
    slug: "phone-cases",
  },
  {
    name: "Privacy Tempered Glass",
    image: "/Images/Privacy-Tempered-Glass.webp",
    slug: "privacy-tempered-glass",
  },
  {
    name: "Arm Band",
    image: "/Images/arm-band.jpg.webp",
    slug: "arm-band",
  },
  {
    name: "Multi Country Wall Plug",
    image: "/Images/Multi-Country-Wall-Plug.webp",
    slug: "multi-country-wall-plug",
  },
  {
    name: "Wired Ear Plugs",
    image: "/Images/Wired-Ear-Plugs.jpg.webp",
    slug: "wired-ear-plugs",
  },
  {
    name: "Apple Watch Protector",
    // Assuming you have two versions and want to use the first one
    image: "/Images/Apple-Watch-Protector.jpg (1).webp",
    slug: "apple-watch-protector",
  },
];

const ProductCategories = () => {
  return (
    <div className="container flex-wrap d-flex flex-row categories-container-box align-items-center justify-content-between my-3">
      {CategoriesItem.map((element) => (
        <ProductCategoriesItem
          key={element.name}
          name={element.name}
          slug={element.slug}
          image={element.image}
        />
      ))}
    </div>
  );
};

export default ProductCategories;
