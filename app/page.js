//Allows components to be rendered.
"use client";

//Import all necessary styles and components.
import React from "react";
import Image from "next/image";
import Header from "./components/Header"; // Header component.
import Footer from "./components/Footer"; // Footer component.
import BrandToRepair from "./components/homepageContent/BrandToRepair"; // To display the brands.
import Link from "next/link"; // Helps with client side navigation.
import SimpleCarousel from "./components/homepageContent/SimpleCarousel.client"; // Client side carousel.
import HomePageSections from "./components/homepageContent/FourInfoSection"; // Home page content.
import TradeIn_Assessment from "./components/homepageContent/TradeInAssessment"; // Trade in valuation component.
import { GlobalProvider } from "./GlobalProvider";
import ChatrSection from "./components/homepageContent/ChatrSection";
import ApprovedComments from "./components/homepageContent/ApprovedComment";
import SubmitCommentForm from "./components/homepageContent/SubmitCommentForm";
// Default function for the HomePage.
export default function Home() {
  const pageContainerStyle = {
    display: "flex",
    flexDirection: "column", // Ensure components are stacked vertically
    alignItems: "center", // Center the components horizontally
  };

  // images for carousel, will move this to separate file later on, for simplicity.
  const images = [
    {
      url: "/assets/images/home/Sellphone-mobiles-1-2048x1152.jpg",
      title: "Chatr, Freedom & Lucky Mobile",
      subtitle: "The best prepaid plans available here.",
      link: "/chatr-freedom-lucky-mobile",
      text: "/what-we-do",
    },
    {
      url: "/assets/images/home/sellphone-lab-inside-2-2048x952.jpg",
      title: "Leading Store in Calgary",
      subtitle: "A glimpse into our state-of-the-art facilities.",
      link: "/about",
      text: "Take a tour of our lab.",
    },
    {
      url: "/assets/images/home/mobile-phones-9.jpg",
      title: "Latest Mobile Phones",
      subtitle: "Explore the latest in mobile technology.",
      link: "/blog",
      text: "Check out the newest arrivals.",
    },
    {
      url: "/assets/images/home/SellphoneLab-2048x1152.jpg",
      title: "Sellphone Lab Services",
      subtitle: "Your one-stop shop for all mobile needs.",
      link: "/repair",
      text: "Learn more about what we offer.",
    },
    {
      url: "/assets/images/home/Sale-of-new-used-phones.jpg",
      title: "New & Used Phones",
      subtitle: "Tested and Inspected, Satisfaction Guaranteed!",
      link: "/accessories",
      text: "Find your next phone today.",
    },
  ];

  // Render the function to create the UI of the page.
  return (
    //Import all the components of homepage. (Header at top, Footer at the end)
    <div>
      <GlobalProvider>
        <Header />
        <SimpleCarousel images={images} />
        <HomePageSections />
        <BrandToRepair />
        <div style={pageContainerStyle}>
          <TradeIn_Assessment />
          <ChatrSection />
          <SubmitCommentForm />
          <ApprovedComments />
        </div>
        <Footer />
      </GlobalProvider>
    </div>
  );
}
