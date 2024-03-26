import React from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import CategoryDetailsdata from "./CategoryDetails";
export default function CategoryDetail() {
  return (
    <div>
      <Header />
        <CategoryDetailsdata/>
      <Footer />
    </div>
  );
}
