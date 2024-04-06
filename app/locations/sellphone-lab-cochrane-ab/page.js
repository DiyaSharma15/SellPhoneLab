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
            <h2 className="text-center">
              Welcome to Sellphone Lab – Cochrane, AB
            </h2>
            <p className="text-center">
              Your Trusted Source for Mobile Repairs, Devices, and Accessories
              in Cochrane, AB
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="mb-2">About Us</h3>
            <p className="">
              We’re thrilled to announce the grand opening of our third location
              in the picturesque town of Cochrane, Alberta! At Sellphone Lab,
              we’ve been dedicated to providing top-notch mobile repair,
              unlocking services, and a wide range of tech solutions. With the
              opening of our new store, we’re excited to bring our expertise and
              commitment to customer satisfaction to the vibrant community of
              Cochrane.
            </p>
            <h3 className="mb-2 mt-2">
              Discover a World of Tech Solutions in Cochrane, AB
            </h3>
            <p>
              Sellphone Lab Olds is not just a store; it’s a hub for all your
              tech needs. Whether you’re looking for fast and reliable mobile
              repairs, want to unlock the full potential of your phone, or are
              in the market for the latest accessories and gadgets, our expert
              team is here to assist you.
            </p>
            <img src="https://sellphonelab.ca/wp-content/uploads/2023/03/sellphone-lab-1-1024x553.jpg.webp" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="text-center mb-2">Contact Information:</h3>
            <ul>
              <li className="location_icon">
                #6, 122, 4th Avenue West, Cochrane, AB T4C 1A9
              </li>
              <li className="phone_icon">
                <a href="tel:+1403-449-3030">+1 403-449-3030</a>
              </li>
              <li className="email_icon">
                <a href="mailto:cochrane@sellphonelab.ca">
                  cochrane@sellphonelab.ca
                </a>
              </li>
            </ul>
            <div style={divStyle}>
              <div id="my-map-display" style={divStyle1}>
                <iframe
                  style={divStyle2}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.4738843533014!2d-114.47539851922124!3d51.191919171262136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371409dc8c466d3%3A0x9720c97ff7e66ef2!2s122%204%20Ave%20W%2C%20Cochrane%2C%20AB%20T4C%201A9%2C%20Canada!5e0!3m2!1sen!2sin!4v1712340444987!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <p className="mt-5">
              At Sellphone Lab, we’re not just fixing devices; we’re building
              connections. Come and experience the Sellphone Lab difference at
              our newest location in Cochrane. We look forward to serving you
              and becoming a valued member of the Cochrane community!
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
