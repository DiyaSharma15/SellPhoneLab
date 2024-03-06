// pages/accessories.js
import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Dynamically import the CheckoutForm component with SSR disabled
const CheckoutFormWithNoSSR = dynamic(
  () => import("../components/CheckoutForm"), // Make sure the path matches your file structure
  { ssr: false }
);

//  don't need to directly import Stripe packages here if they are used within the CheckoutForm

export default function Accessories() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
            {/* Use the dynamically imported form which includes Stripe Elements */}
            <CheckoutFormWithNoSSR />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
