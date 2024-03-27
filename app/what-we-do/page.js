import React from "react";
import Header from "../components/Header"
import Footer from '../components/Footer';
import ServiceCard from './ServiceCard'

//What SellPhoneLabs does page
export default function WhatWeDo() {
    return (
        <div>
        <Header/>
        <ServiceCard
          title = "Unlock Phones"
          description = "Testing"
          imageSrc="/assets/images/whatwedo/Unlock-Phones.jpg"
          readMoreLink="/what-we-do"
        />
        <Footer/>
      </div>
    );
    }

