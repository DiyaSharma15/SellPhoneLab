"use client";
import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import Footer from "@/app/components/Footer";

export default function About() {
  const divStyle = {
    overflow: "hidden",
    maxWidth: "100%",
    width: "700px",
    height: "500px",
  };
  const divStyle1 = {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  };
  const divStyle2 = {
    height: "100%",
    width: "100%",
    border: "0",
  };
  return (
    <div className="">
      <Header />
      <Head>
        <title>
          Mobile Repair Services &amp; Phone Accessories in Calgary AB -
          Sellphone Lab
        </title>
        <meta
          name="description"
          content="Learn more about Sellphone Lab, your ultimate destination for cell phone, computer, and tablet requirements."
        />
      </Head>
      <div className="container-fluid">
        <div className="row headding_row">
          <div className="col-sm-12 col-lg-12 col-md-12 mt-5 mb-5">
            <h2 className="text-center">Welcome to Sellphone Lab – Olds, AB</h2>
            <p className="text-center">
              Your Trusted Source for Mobile Repairs, Devices, and Accessories
              in Olds, AB
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="text-center mb-2">About Us</h3>
            <p className="text-center">
              We’re thrilled to announce the grand opening of our second
              location in the picturesque town of Olds, Alberta! At Sellphone
              Lab, we’ve been dedicated to providing top-notch mobile repair,
              unlocking services, and a wide range of tech solutions. With the
              opening of our new store, we’re excited to bring our expertise and
              commitment to customer satisfaction to the vibrant community of
              Olds.
            </p>
            <img src="https://sellphonelab.ca/wp-content/uploads/2023/12/Sellphone-labs-location-Olds-AB-1024x712.jpg.webp" />
            <h3 className="mt-5">
              Discover a World of Tech Solutions in Olds, AB
            </h3>
            <p>
              Sellphone Lab Olds is not just a store; it’s a hub for all your
              tech needs. Whether you’re looking for fast and reliable mobile
              repairs, want to unlock the full potential of your phone, or are
              in the market for the latest accessories and gadgets, our expert
              team is here to assist you.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="text-center mb-2">Contact Information:</h3>
            <ul>
              <li className="location_icon">6214 46 St, Olds, AB T4H 1M6</li>
              <li className="phone_icon">
                <a href="tel:+1403-561-2020">+1 403-561-2020</a>
              </li>
              <li className="email_icon">
                <a href="mailto:olds@sellphonelab.ca">olds@sellphonelab.ca</a>
              </li>
            </ul>
            <div style={divStyle}>
              <div id="my-map-display" style={divStyle1}>
                <iframe
                  style={divStyle2}
                  frameborder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=6214+46+St,+Olds,+AB+T4H+1M6,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
              <a
                class="the-googlemap-enabler"
                href="https://www.bootstrapskins.com/themes"
                id="enable-map-data"
              >
                premium bootstrap themes
              </a>
            </div>
            <p className="mt-5">
              At Sellphone Lab, we’re not just fixing devices; we’re building
              connections. Come and experience the Sellphone Lab difference at
              our newest location in Olds. We look forward to serving you and
              becoming a valued member of the Olds community!
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <h3 className="text-center mb-5">Services We Offer</h3>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Mobile Repairs:</h4>
            <p>
              Our highly skilled technicians are equipped to handle a variety of
              repairs, from cracked screens to software issues. We’re committed
              to providing fast, high-quality repairs that will have you back
              using your device in no time.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Phone Unlocking:</h4>
            <p>
              Unlock the potential of your phone with our professional unlocking
              services. Whether you’re planning a trip abroad or looking to
              switch carriers, Sellphone Lab Olds can liberate your device for
              ultimate flexibility
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Comprehensive Tech Solutions:</h4>
            <p>
              From computer repairs to data transfer services, we’re your
              one-stop-shop for all things tech. Our team can fix or replace any
              part, upgrade your devices, and ensure they’re running smoothly.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Explore Our Product Range:</h4>
            <p>
              In addition to our repair and unlocking services, Sellphone Lab
              Olds offers a curated selection of the latest accessories,
              including phone cases, screen protectors, chargers, and more.
              Discover cutting-edge gadgets and tech solutions that complement
              your lifestyle.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Loyalty Program:</h4>
            <p>
              Ask us about our Loyalty Card! Enjoy exclusive discounts on
              accessories and repairs with our loyalty program. It’s our way of
              saying thank you for choosing Sellphone Lab.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Two Locations to Serve You Better:</h4>
            <p>
              With two convenient locations in Calgary and Olds, we’re proud to
              be your trusted source for all things tech in Alberta. Whether
              you’re a local resident or passing through, we invite you to visit
              Sellphone Lab Olds for unparalleled service and expertise.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
