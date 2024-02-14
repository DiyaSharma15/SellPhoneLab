"use client";
import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BrandToRepair from "./components/BrandToRepair";
import Link from "next/link";
import SimpleCarousel from './components/SimpleCarousel.client';
import HomePageSections from "./components/HomePageSections";
import AppointmentForm from "./components/AppointmentForm";

export default function Home() {
  const images = [
    { 
      url: '/assets/images/home/Sellphone-mobiles-1-2048x1152.jpg', 
      title: 'Chatr, Freedom & Lucky Mobile', 
      subtitle: 'The best prepaid plans available here.', 
      link: '/chatr-freedom-lucky-mobile', 
      text: '/what-we-do' 
    },
    { 
      url: '/assets/images/home/sellphone-lab-inside-2-2048x952.jpg', 
      title: 'Leading Store in Calgary', 
      subtitle: 'A glimpse into our state-of-the-art facilities.', 
      link: '/about', 
      text: 'Take a tour of our lab.' 
    },
    { 
      url: '/assets/images/home/mobile-phones-9.jpg', 
      title: 'Latest Mobile Phones', 
      subtitle: 'Explore the latest in mobile technology.', 
      link: '/blog', 
      text: 'Check out the newest arrivals.' 
    },
    { 
      url: '/assets/images/home/SellphoneLab-2048x1152.jpg', 
      title: 'Sellphone Lab Services', 
      subtitle: 'Your one-stop shop for all mobile needs.', 
      link: '/repair', 
      text: 'Learn more about what we offer.' 
    },
    { 
      url: '/assets/images/home/Sale-of-new-used-phones.jpg', 
      title: 'New & Used Phones', 
      subtitle: 'Tested and Inspected, Satisfaction Guaranteed!', 
      link: '/accessories', 
      text: 'Find your next phone today.' 
    },
  ];

  return (
    <div>
      <Header/>
      <SimpleCarousel images={images} />
      <BrandToRepair/>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
        <HomePageSections />
        <AppointmentForm />
      </div>
      <Footer/>

    </div>
  );
};
