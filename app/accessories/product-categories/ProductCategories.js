"use client";
import React, { useState } from "react";
import "./productCategories.css";
import ProductCategoriesItem from "./product-categories-item/ProductCategoriesItem";
import phonecase from "./Images/phone-photos-9-1.jpg.webp";
import PrivacyTemperedGlass from "./Images/Privacy-Tempered-Glass.webp";
import ArmBand from "./Images/arm-band.jpg.webp";
import MultiCountryWallPlug from "./Images/Multi-Country-Wall-Plug.webp";
import WiredEarPlugs from "./Images/Wired-Ear-Plugs.jpg.webp";
import AppleWatchProtector from "./Images/Apple-Watch-Protector.jpg (1).webp";

const CategoriesItem = [
  {
    name: "Phone Cases",
    image: phonecase,
  },
  {
    name: "Privacy Tempered Glass",
    image: PrivacyTemperedGlass,
  },
  {
    name: "Arm Band",
    image: ArmBand,
  },
  {
    name: "Multi Country Wall Plug",
    image: MultiCountryWallPlug,
  },
  {
    name: "Wired Ear Plugs",
    image: WiredEarPlugs,
  },
  {
    name: "Apple Watch Protector",
    image: AppleWatchProtector,
  },
];
const ProductCategories = (props) => {
  return (
    <div className="container flex-wrap d-flex flex-row  categories-container-box align-items-center justify-content-between my-3">
      {CategoriesItem.map((element) => {
        return (
          <ProductCategoriesItem
            key={element.name}
            name={element.name}
            image={element.image}
          />
        );
      })}
    </div>
  );
};

export default ProductCategories;
