import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "./ServiceCard";
import styles from "./ServiceCard.module.css";

//What SellPhoneLabs does page
export default function WhatWeDo() {
  return (
    <div>
      <Header />
      <div className={styles.servicesContainer}>
        <ServiceCard
          title="Unlock Phones"
          description="Testing"
          imageSrc="/assets/images/whatwedo/unlockphones.jpg"
          readMoreLink="/what-we-do"
        />
      </div>

      <Footer />
    </div>
  );
}
