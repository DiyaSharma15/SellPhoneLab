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
    height: "650px",
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
              Welcome to Sellphone Lab Inc, Calagry AB
            </h2>
            <p className="text-center">
              Your Trusted Source for Mobile Repairs, Devices, and Accessories
              in Calgary, AB
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="text-center mb-2">About Calgary Location</h3>
            <p className="text-center">
              Welcome to Sellphone Lab Calgary, your premier destination for
              cutting-edge tech solutions. Nestled at 36 Riverglen Dr SE, we
              take pride in being the go-to spot for all your mobile repair,
              unlocking, and accessory needs. Our skilled technicians are
              dedicated to providing fast, transparent, and high-quality
              service, ensuring your devices are in top-notch condition. With a
              commitment to customer satisfaction, we offer same-day repairs and
              a lifetime warranty on our services. Explore our extensive range
              of accessories, from phone cases to the latest gadgets. At
              Sellphone Lab Calgary, we’re not just fixing phones; we’re
              fostering a tech-savvy community.
            </p>
            <img src="https://sellphonelab.ca/wp-content/uploads/2023/02/store-outside.jpeg" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3 className="text-center mb-2">Contact Information:</h3>
            <ul>
              <li className="location_icon">
                36 Riverglen Dr SE Calgary, AB T2C 4L5
              </li>
              <li className="phone_icon">
                <a href="tel:+1403-430-2222">+1 403-430-2222</a>
              </li>
              <li className="email_icon">
                <a href="mailto:contact@sellphonelab.ca">
                  contact@sellphonelab.ca
                </a>
              </li>
            </ul>
            <div style={divStyle}>
              <div id="my-map-display" style={divStyle1}>
                <iframe
                  style={divStyle2}
                  frameborder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=36+Riverglen+Dr+SE,+Calgary,+AB+T2C+4L5,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
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
          </div>
        </div>

        <div className="row mt-5">
          <h3 className="text-center mb-5">Services We Offer</h3>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>High-Quality Repairs:</h4>
            <p>
              Our highly qualified technicians specialize in fast and
              high-quality mobile repair and unlocking services, ensuring the
              highest customer satisfaction. We offer same-day repairs while you
              wait, ensuring you are back up and running in no time.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Brand-Specific Repairs:</h4>
            <p>
              Choose from a wide range of brands for repairs, including Apple,
              Samsung, Google, LG, Huawei, and others. We guarantee to match the
              price of any local competitor for the same repair, providing you
              with the best possible price.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Transparent Repairs:</h4>
            <p>
              Our repair process is transparent, and we provide a detailed
              breakdown of the issues and associated costs before commencing any
              work.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Same Day Repairs:</h4>
            <p>
              We understand the value of your time, and in most cases, we can
              complete repairs in less than two hours.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6">
            <h4>Lifetime Warranty:</h4>
            <p>
              All our repairs come with a lifetime warranty valid at all our
              locations worldwide, offering you peace of mind that your device
              is protected for life.
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
        </div>
        <div className="row mt-5">
          <h3 className="text-center mb-5">What We Do</h3>
          <div className="col-sm-12 col-lg-6 col-md-12">
            <h4>Unlock Phones:</h4>
            <p>
              If you’re traveling abroad or switching carriers, our unlocking
              service ensures you have the flexibility to use your device the
              way you want.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12">
            <h4>Phone Accessories:</h4>
            <p>
              Explore our selection of accessories, including earphones,
              chargers, cables, AirPods, and more.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12">
            <h4>Phone Repairs:</h4>
            <p>
              From cracked screens to dead batteries and complex software
              issues, our expert technicians are committed to providing
              professional phone repair services.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12">
            <h4>Sale of Mobile Cases:</h4>
            <p>Keep your device stylish and protected with our mobile cases.</p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12">
            <h4>Computer Repairs:</h4>
            <p>
              We offer a range of computer repair services, from broken screens
              to water damage, ensuring your devices are in top condition.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12">
            <h4>Sale of New & Used Phones:</h4>
            <p>
              Whether you’re in the market for a new or used phone, we have a
              wide selection to fit every budget and need.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12">
            <h4>Data Transfer/Management:</h4>
            <p>
              Safeguard your personal and professional data with our data
              transfer services.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
