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
      {/* Service Container To Hold All Service Types */}
      <div className={styles.servicesContainer}>
        <ServiceCard
          title="Unlock Phones"
          description="If traveling abroad or simply looking to switch carriers, a locked phone can limit your options and make it difficult to access all the features of your device."
          imageSrc="/assets/images/whatwedo/unlockphones.jpg"
          readMoreLink="/what-we-do/UnlockPhones"
        />
        <ServiceCard
          title="Phone Repairs"
          description="Whether you have a cracked screen, a dead battery, or something more complex like software issues, our team of expert technicians is here to help."
          imageSrc="/assets/images/whatwedo/phonerepairs.jpeg"
          readMoreLink="/what-we-do/PhoneRepairs"
        />
        <ServiceCard
          title="Computer Repairs"
          description="Whether you have a broken screen, software issues, or something more complex like water damage, our team of expert technicians is here to help."
          imageSrc="/assets/images/whatwedo/computerrepairs.jpeg"
          readMoreLink="/what-we-do"
        />
        <ServiceCard
          title="Data Transfer & Management"
          description="At Sellphone Lab in Calgary, we understand the importance of your personal and professional data. That’s why we offer a range of data transfer services to help keep your information safe, secure, and accessible."
          imageSrc="/assets/images/whatwedo/datatransfer.jpeg"
          readMoreLink="/what-we-do"
        />
        <ServiceCard
          title="Phone Accessories"
          description="If you’re looking for a new set of earphones, a wall charger, a cable, or even AirPods, we have you covered."
          imageSrc="/assets/images/whatwedo/phoneaccessories.jpeg"
          readMoreLink="/what-we-do/phone-accessories"
        />
        <ServiceCard
          title="Mobile Phone Cases"
          description="At Sellphone Lab in Calgary, we understand the importance of protecting your phone. Not only does it keep your device looking new and stylish, but it also helps to prevent damage from everyday wear and tear."
          imageSrc="/assets/images/whatwedo/phonecases.jpeg"
          readMoreLink="/what-we-do"
        />
        <ServiceCard
          title="New & Used Phones"
          description="Are you in the market for a new or used phone? We offer a wide selection of mobile phones to fit every budget and need. "
          imageSrc="/assets/images/whatwedo/salephones.jpeg"
          readMoreLink="/what-we-do"
        />
      </div>

      <Footer />
    </div>
  );
}
