import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BrandToRepair from "./components/BrandToRepair";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header/>
      <BrandToRepair/>
      <Footer/>

    </div>
  );
};
