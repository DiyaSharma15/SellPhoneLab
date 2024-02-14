import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BrandToRepair from "./components/BrandToRepair";
import Link from "next/link";
import SimpleCarousel from './components/SimpleCarousel.client';

export default function Home() {
  const images = [
    { 
      url: '/assets/images/home/Sellphone-mobiles-1-2048x1152.jpg', 
      title: 'Chatr, Freedom & Lucky Mobile', 
      subtitle: 'The best prepaid plans available here.', 
      link: '/chatr-freedom-lucky-mobile', 
      text: 'Discover our range of services and plans.' 
    },
    { 
      url: '/assets/images/home/sellphone-lab-inside-2-2048x952.jpg', 
      title: 'Leading Store in Calgary', 
      subtitle: 'A glimpse into our state-of-the-art facilities.', 
      link: '/inside-sellphone-lab', 
      text: 'Take a tour of our lab.' 
    },
    { 
      url: '/assets/images/home/mobile-phones-9.jpg', 
      title: 'Latest Mobile Phones', 
      subtitle: 'Explore the latest in mobile technology.', 
      link: '/latest-mobile-phones', 
      text: 'Check out the newest arrivals.' 
    },
    { 
      url: '/assets/images/home/SellphoneLab-2048x1152.jpg', 
      title: 'Sellphone Lab Services', 
      subtitle: 'Your one-stop shop for all mobile needs.', 
      link: '/services', 
      text: 'Learn more about what we offer.' 
    },
    { 
      url: '/assets/images/home/Sale-of-new-used-phones.jpg', 
      title: 'New & Used Phones', 
      subtitle: 'Tested and Inspected, Satisfaction Guaranteed!', 
      link: '/new-used-phones', 
      text: 'Find your next phone today.' 
    },
  ];
  
  return (
    <div>
      <Header/>
      <SimpleCarousel images={images} />
      <BrandToRepair/>
      <Footer/>

    </div>
  );
};
